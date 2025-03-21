global using FastEndpoints;
using Microsoft.AspNetCore.Http.Json;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddFastEndpoints();

// Enable lower case property names in JSON responses.
builder.Services.Configure<JsonOptions>(JsonOptions =>
{
  JsonOptions.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

// Allow CORS for local development
builder.Services.AddCors( options =>
{
  options.AddPolicy("AllowLocalhost", builder =>
  {
    builder.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
  });
});


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseDefaultExceptionHandler();
app.UseCors("AllowLocalhost");
app.UseFastEndpoints();

app.Run();
