using AutoMapper;
using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Common;
using FakedOutShop.Application.DTOs;
using FakedOutShop.Application.Options;
using FakedOutShop.Domain.Entities;
using FluentResults;
using Microsoft.Extensions.Options;

namespace FakedOutShop.Application.Models.Services
{
    public class AuthService: IAuthService
    {
        private readonly IUserManagerWrapper _userManager;
        private readonly ITokenService _tokenService;
        private readonly IOptions<JwtOptions> _options;
        private readonly IMapper _mapper;

        public AuthService(
            IUserManagerWrapper userManager,
            ITokenService tokenService,
            IOptions<JwtOptions> options,
            IMapper mapper)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _options = options;
            _mapper = mapper;
        }

        public async Task<Result> RegisterUserAsync(RegisterDto registerDto)
        {
            var existingUser = await _userManager.FindByEmailAsync(registerDto.Email);
            if (existingUser != null)
                return Result.Fail("A user with this email already exists.");

            var user = _mapper.Map<User>(registerDto);
            user.UserName = registerDto.Email.ToLower();
            user.Email = registerDto.Email.ToLower();

            var result = await _userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded)
                return Result.Fail(result.Errors.Select(e => e.Description).ToList());

            var roleResult = await _userManager.AddToRoleAsync(user, RoleConstants.UserRole);
            if (!roleResult.Succeeded)
                return Result.Fail("Failed to assign the user role.");

            return Result.Ok();
        }
        public async Task<Result<string>> LoginUserAsync(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null)
                return Result.Fail("User not found");

            var isPasswordValid = await _userManager.IsPasswordValid(user, loginDto.Password);
            if (!isPasswordValid)
                return Result.Fail("Invalid password");

            var tokenResult = await _tokenService.CreateTokenAsync(user);
            if (tokenResult.IsFailed)
                return Result.Fail("Token generation failed");

            return tokenResult;
        }
    }
}

