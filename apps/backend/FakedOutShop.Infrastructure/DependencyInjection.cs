using AutoMapper;
using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Models.Services;
using FakedOutShop.Application.Options;
using FakedOutShop.Application.Profiles;
using FakedOutShop.Domain.Interfaces;
using FakedOutShop.Domain;
using FakedOutShop.Domain.Entities;
using FakedOutShop.Domain.Repositories;
using FakedOutShop.Infrastructure.Roles;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FakedOutShop.Infrastructure
{
  public static class DependencyInjection
  {
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
      services.AddDbContext<ApplicationDbContext>(options =>
        options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

      services.AddIdentity<User, IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

      services.AddScoped<IUserRepository, UserRepository>();
      services.AddScoped<IAuthService, AuthService>();
      services.AddScoped<ITokenService, TokenService>();
      services.AddScoped<IUserManagerWrapper, UserManagerWrapper>();

      services.Configure<JwtOptions>(configuration.GetSection("Jwt"));

      services.AddAutoMapper(typeof(MappingProfile).Assembly);

      return services;
    }
    public static async Task InitializeRolesAsync(IServiceProvider serviceProvider)
    {
      await RoleInitializer.InitializeAsync(serviceProvider);
    }
  }
}
