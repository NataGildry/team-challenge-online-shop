using FakedOutShop.Application.DTOs;

namespace FakedOutShop.Application.Abstractions
{
  public interface IUserService
  {
    Task<ResponseDto> GetRandomUserAgeAsync();
  }
}
