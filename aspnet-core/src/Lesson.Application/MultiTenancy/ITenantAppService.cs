using Abp.Application.Services;
using Lesson.MultiTenancy.Dto;

namespace Lesson.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

