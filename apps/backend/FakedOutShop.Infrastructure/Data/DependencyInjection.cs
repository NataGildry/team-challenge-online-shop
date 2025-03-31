using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Models.Services;
using FakedOutShop.Infrastructure.Cosmos;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FakedOutShop.Infrastructure.Data
{
  public static class DependencyInjection
  {
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
      CosmosClientProvider.ProvideCosmosClient(services, configuration);
      services.AddScoped<IUserService, UserService>();

      return services;
    }
  }
}
