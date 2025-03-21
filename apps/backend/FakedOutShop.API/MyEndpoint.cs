using FastEndpoints;
public class MyResponse
{
  public int Age { get; set; }
}

  public class MyEndpoint: EndpointWithoutRequest<MyResponse>
  {
  public override void Configure()
  {
    Get("user");
    AllowAnonymous();
  }

  public override async Task HandleAsync(CancellationToken ct)
  {
    await SendAsync(new()
    {
      Age = new Random().Next(18, 101)
    });
  }
}

