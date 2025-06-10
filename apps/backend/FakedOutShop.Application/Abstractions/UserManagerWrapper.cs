using FakedOutShop.Application.Abstractions;
using FakedOutShop.Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace FakedOutShop.Application.Abstractions
{
  public class UserManagerWrapper : IUserManagerWrapper
  {
    private readonly UserManager<User> _userManager;

    public UserManagerWrapper(UserManager<User> userManager)
    {
      _userManager = userManager;
    }

    public async Task<IdentityResult> CreateAsync(User user, string password)
    {
      return await _userManager.CreateAsync(user, password);
    }

    public async Task<IdentityResult> AddToRoleAsync(User user, string role)
    {
      return await _userManager.AddToRoleAsync(user, role);
    }

    public async Task<User> FindByEmailAsync(string email)
    {
      return await _userManager.FindByEmailAsync(email);
    }

    public async Task<bool> IsPasswordValid(User user, string password)
    {
      return await _userManager.CheckPasswordAsync(user, password);
    }
  }
}

