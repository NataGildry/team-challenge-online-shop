using AutoMapper;
using FakedOutShop.Application.DTOs;
using FakedOutShop.Domain.Entities;

namespace FakedOutShop.Application.Profiles;

public class MappingProfile : Profile
{
  public MappingProfile()
  {
    CreateMap<RegisterDto, User>()
      .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email));
  }
}
