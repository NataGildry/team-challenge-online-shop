FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["FakedOutShop.API/FakedOutShop.API.csproj", "FakedOutShop.API/"]
COPY ["FakedOutShop.UnitTests/FakedOutShop.UnitTests.csproj", "FakedOutShop.UnitTests/"]
COPY ["FakedOutShop.Application/FakedOutShop.Application.csproj", "FakedOutShop.Application/"]
COPY ["FakedOutShop.Domain/FakedOutShop.Domain.csproj", "FakedOutShop.Domain/"]
COPY ["FakedOutShop.Infrastructure/FakedOutShop.Infrastructure.csproj", "FakedOutShop.Infrastructure/"]
RUN dotnet restore "FakedOutShop.API/FakedOutShop.API.csproj"
COPY . .
WORKDIR "/src/FakedOutShop.API"
RUN dotnet build "FakedOutShop.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "FakedOutShop.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FakedOutShop.API.dll"]
