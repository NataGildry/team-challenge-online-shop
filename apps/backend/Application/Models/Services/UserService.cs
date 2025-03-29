using Application.Abstractions;
using Application.DTOs;

namespace Application.Models.Services
{
  public class UserService : IUserService
  {
    public async Task<ResponseDto> GetRandomUserAgeAsync()
    {
      await Task.Delay(10);

      int randomAge = new Random().Next(18, 101);

      return new ResponseDto(randomAge);
    }
  }
}
