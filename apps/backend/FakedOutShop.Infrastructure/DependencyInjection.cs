using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Models.Services;
using FakedOutShop.Application.Options;
using FakedOutShop.Domain.Interfaces;
using FakedOutShop.Domain;
using FakedOutShop.Domain.Entities;
using FakedOutShop.Domain.Repositories;
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
        options.UseNpgsql(configuration.GetConnectionString("DefaultConnection"))); // Use Npgsql for PostgreSQL

      services.AddIdentity<User, IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

      services.AddScoped<IUserRepository, UserRepository>();
      services.AddScoped<IAuthService, AuthService>();
      services.AddScoped<ITokenService, TokenService>(); // Ensure this line is present

      services.Configure<JwtOptions>(configuration.GetSection("Jwt"));
      return services;
    }
  }
}
