namespace FakedOutShop.Domain.Abstractions;

public interface IEntity<TKey>
{
  TKey Id { get; set; }
}
