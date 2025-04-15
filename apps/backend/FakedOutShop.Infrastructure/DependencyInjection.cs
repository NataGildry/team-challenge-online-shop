using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Models.Services;
using FakedOutShop.Domain.Interfaces;
using FakedOutShop.Infrastructure.Cosmos;
using FakedOutShop.Infrastructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.Azure.Cosmos;

namespace FakedOutShop.Infrastructure
{
  public static class DependencyInjection
  {
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
      // Register CosmosOptions
      services.Configure<CosmosOptions>(configuration.GetSection("CosmosDb"));

      // Register CosmosClient
      services.AddSingleton<CosmosClient>(provider =>
      {
        var options = provider.GetRequiredService<IOptions<CosmosOptions>>().Value;
        return new CosmosClient(options.AccountEndpoint, options.AccountKey);
      });

      // Register repositories and services
      services.AddScoped<IUserService, UserService>();
      services.AddScoped<IUserRepository, UserRepository>();

      return services;
    }
  }
}
