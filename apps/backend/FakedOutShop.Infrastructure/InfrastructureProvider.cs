using FakedOutShop.Infrastructure.Cosmos;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FakedOutShop.Infrastructure
{
  internal class InfrastructureProvider
  {
    public static void ProvideRepositories(IServiceCollection services, IConfiguration configuration)
    {
      CosmosClientProvider.ProvideCosmosClient(services, configuration);
    }
  }
}
