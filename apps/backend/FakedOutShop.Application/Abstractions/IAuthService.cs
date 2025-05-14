using FluentResults;
using System.Threading.Tasks;
using FakedOutShop.Application.DTOs;

namespace FakedOutShop.Application.Abstractions
{
  public interface IAuthService
  {
    Task<Result> RegisterUserAsync(RegisterDto registerDto);
    Task<Result<string>> LoginUserAsync(LoginDto loginDto);
  }
}

