using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.DTOs;
using FluentResults;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FakedOutShop.API.Controllers
{
  [ApiController]
  [Route("api/user")]
  public class UserController : ControllerBase
  {
    private readonly IAuthService _authService;

    public UserController(IAuthService authService)
    {
      _authService = authService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
    {
      var result = await _authService.RegisterUserAsync(registerDto);
      if (result.IsFailed)
      {
        return BadRequest(new { Errors = result.Errors });
      }
      return Ok(new { Message = "User registered successfully" });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
    {
      var result = await _authService.LoginUserAsync(loginDto);
      if (result.IsFailed)
      {
        return Unauthorized(new { Errors = result.Errors });
      }
      return Ok(new { Token = result.Value });
    }
  }
}


