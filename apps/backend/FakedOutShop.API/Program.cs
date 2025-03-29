using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Infrastructure;
using Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// Add MVC controllers
builder.Services.AddControllers()
  .AddJsonOptions(options =>
  {
    // Enable lower case property names in JSON responses
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
  });

// Register infrastructure services
builder.Services.AddInfrastructureServices(); // Add this line to register services from Infrastructure

// Allow CORS for local development
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowLocalhost", builder =>
  {
    builder.WithOrigins("http://localhost:4200")
      .AllowAnyHeader()
      .AllowAnyMethod();
  });
});

// Add health checks
builder.Services.AddHealthChecks(); // Add this line for health checks

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

// Add standard exception handling middleware
app.UseExceptionHandler("/error");
app.UseHttpsRedirection();

app.UseCors("AllowLocalhost");

// Add routes for controllers
app.UseRouting();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
  endpoints.MapControllers();
});

app.Run();
