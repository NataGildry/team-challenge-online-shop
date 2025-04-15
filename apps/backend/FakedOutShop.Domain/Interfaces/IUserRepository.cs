using FakedOutShop.Domain.Entities;

namespace FakedOutShop.Domain.Interfaces;

public interface IUserRepository
{
  Task<User> GetByEmailAsync(string email);
  Task<bool> IsEmailUniqueAsync(string email);
  Task AddAsync(User user);
}

