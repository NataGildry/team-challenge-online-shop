using FakedOutShop.Domain.Abstractions;
using Microsoft.AspNetCore.Identity;

namespace FakedOutShop.Domain.Entities;

public class User : IdentityUser, IEntity<string>
{
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public string Email { get; set; }
}
