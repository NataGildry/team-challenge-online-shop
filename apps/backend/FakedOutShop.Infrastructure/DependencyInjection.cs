using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Models.Services;
using FakedOutShop.Domain.Interfaces;
using FakedOutShop.Infrastructure.Cosmos;
using FakedOutShop.Infrastructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace FakedOutShop.Infrastructure
{
  public static class DependencyInjection
  {
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
      services.Configure<CosmosOptions>(configuration.GetSection("CosmosDb"));

      CosmosClientProvider.ProvideCosmosClient(services, configuration);

      services.AddScoped<IUserService, UserService>();
      services.AddScoped<IUserRepository, UserRepository>();

      return services;
    }
  }
}
