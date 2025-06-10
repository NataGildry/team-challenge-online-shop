using FakedOutShop.Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace FakedOutShop.Application.Abstractions
{
  public interface IUserManagerWrapper
  {
    Task<IdentityResult> CreateAsync(User user, string password);
    Task<IdentityResult> AddToRoleAsync(User user, string role);
    Task<User> FindByEmailAsync(string email);
    Task<bool> IsPasswordValid(User user, string password);
  }
}

