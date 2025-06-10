using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace FakedOutShop.Infrastructure.Roles
{
  public static class RoleInitializer
  {
    public static async Task InitializeAsync(IServiceProvider serviceProvider)
    {
      var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
      var roles = new[] { "USER", "ADMIN" };

      foreach (var roleName in roles)
      {
        if (!await roleManager.RoleExistsAsync(roleName))
        {
          var role = new IdentityRole(roleName);
          var result = await roleManager.CreateAsync(role);

          if (!result.Succeeded)
          {
            // Log the error
            Console.WriteLine($"Failed to create role '{roleName}': {string.Join(", ", result.Errors.Select(e => e.Description))}");
          }
          else
          {
            Console.WriteLine($"Role '{roleName}' created successfully.");
          }
        }
      }
    }
  }
}

