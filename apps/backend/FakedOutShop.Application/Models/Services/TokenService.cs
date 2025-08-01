using FluentResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Options;
using FakedOutShop.Domain.Entities;

namespace FakedOutShop.Application.Models.Services;

public sealed class TokenService : ITokenService
{
  private readonly JwtOptions _jwtOptions;
  private readonly UserManager<User> _userManager;
  private readonly SymmetricSecurityKey _key;

  public TokenService(
    IOptions<JwtOptions> options,
    UserManager<User> userManager)
  {
    _jwtOptions = options.Value;
    _userManager = userManager;
    _key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_jwtOptions.Key));
  }

  public async Task<Result<string>> CreateTokenAsync(User user)
  {
    var claims = new List<Claim>
    {
      new Claim(ClaimTypes.NameIdentifier, user.Id),
      new Claim(ClaimTypes.Email, user.Email ?? string.Empty),
      new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
    };

    var roles = await _userManager.GetRolesAsync(user);
    claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

    var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256);

    var tokenDescriptor = new SecurityTokenDescriptor
    {
      Subject = new ClaimsIdentity(claims),
      Expires = DateTime.UtcNow.Add(TimeSpan.FromMinutes(_jwtOptions.LifetimeMinutes)),
      SigningCredentials = creds,
      Issuer = _jwtOptions.Issuer,
      Audience = _jwtOptions.Audience
    };

    var tokenHandler = new JwtSecurityTokenHandler();
    var token = tokenHandler.CreateToken(tokenDescriptor);

    return Result.Ok(tokenHandler.WriteToken(token));
  }

}
