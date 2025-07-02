using FakedOutShop.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
namespace FakedOutShop.Domain.Interfaces
{
  public interface IUserRepository
  {
    Task<User> FindByEmailAsync(string email);
    Task<IdentityResult> CreateUserAsync(User user, string password);
    Task<IdentityResult> AddToRoleAsync(User user, string role);
    Task<bool> IsInRoleAsync(User user, string role);
    Task<bool> IsPasswordValid(User user, string password);
  }
}
