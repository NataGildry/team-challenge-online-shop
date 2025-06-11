FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY FakedOutShop.sln .
COPY FakedOutShop.API/ ./FakedOutShop.API/
COPY FakedOutShop.Infrastructure/ ./FakedOutShop.Infrastructure/
COPY FakedOutShop.Application/ ./FakedOutShop.Application/
COPY FakedOutShop.Domain/ ./FakedOutShop.Domain/

RUN dotnet restore ./FakedOutShop.API/FakedOutShop.API.csproj

COPY . .

WORKDIR /src/FakedOutShop.API
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "FakedOutShop.API.dll"]
