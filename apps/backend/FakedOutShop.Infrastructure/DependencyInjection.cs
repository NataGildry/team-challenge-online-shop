using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Models.Services;
using FakedOutShop.Domain.Interfaces;
using FakedOutShop.Infrastructure.Repositories;
using FakedOutShop.Domain;
using FakedOutShop.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Identity.Client;

namespace FakedOutShop.Infrastructure
{
  public static class DependencyInjection
  {
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
      // Register ApplicationDbContext
      services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

      // Register Identity services
      services.AddIdentity<User, IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

      // Register repositories
      services.AddScoped<IUserRepository, UserRepository>();
      services.AddScoped<IAuthService, AuthService>();

      return services;
    }
  }
}
