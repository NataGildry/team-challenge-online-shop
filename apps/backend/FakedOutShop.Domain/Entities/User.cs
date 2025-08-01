using FakedOutShop.Domain.Abstractions;
using Microsoft.AspNetCore.Identity;

namespace FakedOutShop.Domain.Entities;

public class User : IdentityUser, IEntity<string>
{
  public string Email { get; set; }
}
