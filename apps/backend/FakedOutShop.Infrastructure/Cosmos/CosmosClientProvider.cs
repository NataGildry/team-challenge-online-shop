using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Azure.Identity;
using Microsoft.Azure.Cosmos;

namespace FakedOutShop.Infrastructure.Cosmos
{
  internal class CosmosClientProvider
  {
    public static void ProvideCosmosClient(IServiceCollection services, IConfiguration configuration)
    {
      services.Configure<CosmosOptions>(configuration.GetRequiredSection(CosmosOptions.Key));

      // Provide the Cosmos client as singleton as for performance reasons.
      // See https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/best-practice-dotnet
      services.AddSingleton(serviceProvider =>
      {
        CosmosOptions cosmosOptions = serviceProvider.GetRequiredService<IOptions<CosmosOptions>>().Value;

        JsonSerializerOptions options = new()
        {
          DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
          PropertyNameCaseInsensitive = true,
          PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        };

        CosmosClientOptions cosmosClientOptions = new()
        {
          // Replace the default JSON serializer from Newtonsoft with System.Text.Json.
          // This allows us to use common JSON options across the application.
          // Additionally, System.Text.Json has performance benefits over Newtonsoft.
          // https://vissers.page/articles/rudi/cosmos-net-sdk-multiple-doc-types-part-2/
          UseSystemTextJsonSerializerWithOptions = options
        };

        CosmosClient? client;
        if (cosmosOptions.AccountKey is null)
        {
          client = new(
              accountEndpoint: cosmosOptions.AccountEndpoint,
              tokenCredential: new DefaultAzureCredential(),
              clientOptions: cosmosClientOptions
            );
        }
        else
        {
          client = new(
              accountEndpoint: cosmosOptions.AccountEndpoint,
              authKeyOrResourceToken: cosmosOptions.AccountKey,
              clientOptions: cosmosClientOptions
            );
        }
        return client;
      });
    }
  }
}
