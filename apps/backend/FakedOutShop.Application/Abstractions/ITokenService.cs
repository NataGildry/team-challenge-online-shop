using FluentResults;
using FakedOutShop.Domain.Entities;

namespace FakedOutShop.Application.Abstractions;

public interface ITokenService
{
  Task<Result<string>> CreateTokenAsync(User user);
}
