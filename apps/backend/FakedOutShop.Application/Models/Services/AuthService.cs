using FakedOutShop.Application.Abstractions;
using FakedOutShop.Application.Common;
using FakedOutShop.Application.DTOs;
using FakedOutShop.Application.Options;
using FakedOutShop.Domain.Entities;
using FakedOutShop.Domain.Interfaces;
using FluentResults;
using Microsoft.Extensions.Options;

namespace FakedOutShop.Application.Models.Services;

   public class AuthService : IAuthService
   {
       private readonly IUserRepository _userRepository;
       private readonly ITokenService _tokenService;
       private readonly IOptions<JwtOptions> _options;

       public AuthService(
           IUserRepository userRepository,
           ITokenService tokenService,
           IOptions<JwtOptions> options
       )
       {
           _userRepository = userRepository;
           _tokenService = tokenService;
           _options = options;
       }

       public async Task<Result> RegisterUserAsync(RegisterDto registerDto)
       {
           var existingUser  = await _userRepository.FindByEmailAsync(registerDto.Email);
           if (existingUser  != null)
               return Result.Fail("A user with this email already exists.");

           var user = new User
           {
               Email = registerDto.Email,
               FirstName = registerDto.FirstName,
               LastName = registerDto.LastName,
           };

           var result = await _userRepository.CreateUserAsync(user, registerDto.Password);
           if (!result.Succeeded)
               return Result.Fail(result.Errors.Select(e => e.Description).ToList());

           var roleResult = await _userRepository.AddToRoleAsync(user, RoleConstants.UserRole);
           if (!roleResult.Succeeded)
               return Result.Fail("Failed to assign the user role.");

           return Result.Ok();
       }

       public async Task<Result<string>> LoginUserAsync(LoginDto loginDto)
       {
           var user = await _userRepository.FindByEmailAsync(loginDto.Email);
           if (user == null)
               return Result.Fail("User  not found");

           var isPasswordValid = await _userRepository.CheckPasswordAsync(user, loginDto.Password);
           if (!isPasswordValid)
               return Result.Fail("Invalid password");

           var tokenResult = await _tokenService.CreateTokenAsync(user);
           if (tokenResult.IsFailed)
               return Result.Fail("Token generation failed");

           return tokenResult;
       }
   }

