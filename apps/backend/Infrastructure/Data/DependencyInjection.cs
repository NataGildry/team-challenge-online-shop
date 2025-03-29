using Application.Abstractions;
using Application.Models.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Data
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
