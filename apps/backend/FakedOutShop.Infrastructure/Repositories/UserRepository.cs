using FakedOutShop.Domain.Entities;
using FakedOutShop.Domain.Interfaces;
using Microsoft.Azure.Cosmos;
using Microsoft.Extensions.Options;
using System.Net;
using FakedOutShop.Infrastructure.Cosmos;

namespace FakedOutShop.Infrastructure.Repositories
{
  public class UserRepository : IUserRepository
  {
    private readonly Container _container;

    public UserRepository(CosmosClient cosmosClient, IOptions<CosmosOptions> options)
    {
      var cosmosOptions = options.Value;
      _container = cosmosClient.GetContainer(cosmosOptions.DatabaseName, "users");
    }

    public async Task<FakedOutShop.Domain.Entities.User> GetByEmailAsync(string email)
    {
      var query = new QueryDefinition("SELECT * FROM c WHERE c.email = @Email")
        .WithParameter("@Email", email);

      var iterator = _container.GetItemQueryIterator<FakedOutShop.Domain.Entities.User>(query);
      if (iterator.HasMoreResults)
      {
        var response = await iterator.ReadNextAsync();
        return response.FirstOrDefault();
      }

      return null;
    }

    public async Task<bool> IsEmailUniqueAsync(string email)
    {
      var user = await GetByEmailAsync(email);
      return user == null;
    }

    public async Task AddAsync(FakedOutShop.Domain.Entities.User user)
    {
      await _container.CreateItemAsync(user, new PartitionKey(user.Email));
    }
  }
}
