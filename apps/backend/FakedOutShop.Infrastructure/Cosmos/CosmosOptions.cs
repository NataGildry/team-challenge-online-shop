namespace FakedOutShop.Infrastructure.Cosmos;

public class CosmosOptions
{
  public const string Key = "Cosmos";

  public required string AccountEndpoint { get; set; }

  public string? AccountKey { get; set; }

  public string DatabaseName { get; set; } = "fakedoutshop";

  public string ProductsContainerName { get; set; } = "products";

}
