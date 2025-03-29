using Application.DTOs;

namespace Application.Abstractions
{
  public interface IUserService
  {
    Task<ResponseDto> GetRandomUserAgeAsync();
  }
}
