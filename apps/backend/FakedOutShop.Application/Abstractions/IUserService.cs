using FakedOutShop.Application.DTOs;
using FakedOutShop.Domain.Entities;

namespace FakedOutShop.Application.Abstractions
{
  public interface IUserService
  {
    Task<User> GetByEmailAsync(string email);
    Task<bool> IsEmailUniqueAsync(string email);
    Task AddAsync(User user);
  }
}
