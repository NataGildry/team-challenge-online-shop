using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FakedOutShop.Application.Abstractions;
using FakedOutShop.Domain.Entities;

namespace FakedOutShop.Api.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UserController : ControllerBase
  {
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
      _userService = userService;
    }

    [HttpGet("{email}")]
    public async Task<IActionResult> GetByEmailAsync(string email)
    {
      var user = await _userService.GetByEmailAsync(email);
      return user != null ? Ok(user) : NotFound();
    }

    [HttpPost]
    public async Task<IActionResult> AddAsync([FromBody] User user)
    {
      if (user == null)
      {
        return BadRequest("User  cannot be null.");
      }

      try
      {
        await _userService.AddAsync(user);
        return CreatedAtAction(nameof(GetByEmailAsync), new { email = user.Email }, user);
      }
      catch (InvalidOperationException)
      {
        return Conflict("Email is already in use.");
      }
    }

    [HttpGet("unique/{email}")]
    public async Task<IActionResult> IsEmailUniqueAsync(string email)
    {
      var isUnique = await _userService.IsEmailUniqueAsync(email);
      return Ok(isUnique);
    }
  }
}

