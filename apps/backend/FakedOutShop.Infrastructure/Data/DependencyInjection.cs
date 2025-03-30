using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Models.Services;
using Microsoft.Extensions.DependencyInjection;

namespace FakedOutShop.Infrastructure.Data
{
  public static class DependencyInjection
  {
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
      services.AddScoped<IUserService, UserService>();

      return services;
    }
  }
}
