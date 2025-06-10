using System.Text.Json;
using FakedOutShop.Infrastructure;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
  .AddJsonOptions(options =>
  {
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
  });

builder.Services.AddInfrastructureServices(builder.Configuration);
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

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
  app.UseDeveloperExceptionPage();
}
else
{
  app.UseExceptionHandler("/error");
}

app.UseHttpsRedirection();
app.UseCors("AllowLocalhost");
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
