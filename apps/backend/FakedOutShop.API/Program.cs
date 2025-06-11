using System.Text.Json;
using FakedOutShop.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

if (!builder.Environment.IsDevelopment())
{
    var port = Environment.GetEnvironmentVariable("PORT") ?? "80";
    builder.WebHost.ConfigureKestrel(options =>
    {
        options.ListenAnyIP(int.Parse(port));
    });
}

builder.Services.AddControllers()
  .AddJsonOptions(options =>
  {
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
  });

builder.Services.AddInfrastructureServices(builder.Configuration);

builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowLocalhost", builder =>
  {
    builder.WithOrigins(
    // 👇 Docker
    "http://localhost",
    // 👇 Angular
    "http://localhost:4200",
    // 👇 Swagger UI (Docker)
    "http://localhost:8080"
    )
      .AllowAnyHeader()
      .AllowAnyMethod();
  });
});

builder.Services.AddHealthChecks();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ⚠️ Swagger is enabled for all environments for testing purposes,
// ⚠️ since we currently don't have a dedicated production environment.
app.UseSwagger();
app.UseSwaggerUI();

app.UseExceptionHandler("/error");
app.UseHttpsRedirection();

app.UseCors("AllowLocalhost");

app.UseRouting();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
  endpoints.MapControllers();
  endpoints.MapHealthChecks("/health");
});

app.Run();
