using FakedOutShop.Application.Abstractions;
using FakedOutShop.Domain.Entities;
using FakedOutShop.Domain.Interfaces;
using System;
using System.Threading.Tasks;

namespace FakedOutShop.Application.Models.Services
{
  public class UserService : IUserService
  {
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
      _userRepository = userRepository;
    }

    public async Task<User> GetByEmailAsync(string email)
    {
      return await _userRepository.GetByEmailAsync(email);
    }

    public async Task<bool> IsEmailUniqueAsync(string email)
    {
      return await _userRepository.IsEmailUniqueAsync(email);
    }

    public async Task AddAsync(User user)
    {
      if (!await IsEmailUniqueAsync(user.Email))
      {
        throw new InvalidOperationException("Email is already in use.");
      }

      await _userRepository.AddAsync(user);
    }
  }
}
