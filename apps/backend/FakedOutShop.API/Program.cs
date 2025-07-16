using System.Text.Json;
using FakedOutShop.Infrastructure;
using Microsoft.AspNetCore.Identity;

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

using (var scope = app.Services.CreateScope())
{
  var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
  var roles = new[] { "USER", "ADMIN" };

  foreach (var roleName in roles)
  {
    if (!await roleManager.RoleExistsAsync(roleName))
    {
      var role = new IdentityRole(roleName);
      var result = await roleManager.CreateAsync(role);

      if (!result.Succeeded)
      {
        Console.WriteLine($"Failed to create role '{roleName}': {string.Join(", ", result.Errors.Select(e => e.Description))}");
      }
      else
      {
        Console.WriteLine($"Role '{roleName}' created successfully.");
      }
    }
  }
}
// ⚠️ Swagger is enabled for all environments for testing purposes,
// ⚠️ since we currently don't have a dedicated production environment.
app.UseSwagger();
app.UseSwaggerUI();
app.UseDeveloperExceptionPage();
app.UseExceptionHandler("/error");
app.UseHttpsRedirection();
app.UseCors("AllowLocalhost");
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.UseEndpoints(endpoints =>
{
  endpoints.MapControllers();
  endpoints.MapHealthChecks("/health");
});

app.Run();
