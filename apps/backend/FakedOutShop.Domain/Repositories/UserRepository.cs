using FakedOutShop.Domain.Entities;
using FakedOutShop.Domain.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace FakedOutShop.Domain.Repositories
{
  public class UserRepository : IUserRepository
  {
    private readonly UserManager<User> _userManager;

    public UserRepository(UserManager<User> userManager)
    {
      _userManager = userManager;
    }

    public async Task<User> FindByEmailAsync(string email)
    {
      return await _userManager.FindByEmailAsync(email);
    }

    public async Task<IdentityResult> CreateUserAsync(User user, string password)
    {
      return await _userManager.CreateAsync(user, password);
    }

    public async Task<IdentityResult> AddToRoleAsync(User user, string role)
    {
      return await _userManager.AddToRoleAsync(user, role);
    }

    public async Task<bool> IsInRoleAsync(User user, string role)
    {
      return await _userManager.IsInRoleAsync(user, role);
    }

    public async Task<bool> CheckPasswordAsync(User user, string password)
    {
      return await _userManager.CheckPasswordAsync(user, password);
    }
  }
}

