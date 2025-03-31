using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FakedOutShop.Application.DTOs;

namespace FakedOutShop.API.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class UserController : ControllerBase
  {
    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<ResponseDto>> Get()
    {
      int randomAge = new Random().Next(18, 101);
      return new ResponseDto(randomAge);
    }
  }
}

