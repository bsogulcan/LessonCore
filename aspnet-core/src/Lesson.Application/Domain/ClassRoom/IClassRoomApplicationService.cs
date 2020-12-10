using Abp.Application.Services;
using Lesson.Domain.ClassRoom.Dto;
using Lesson.Domain.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.ClassRoom
{
    public interface IClassRoomApplicationService:IApplicationService
    {
        Task<ClassRoomFullOutPut> CreateAsync(CreateClassRoomInput input);
        Task<bool> DeleteAsnyc(DeleteClassRoomInput input);
        Task<ClassRoomFullOutPut> UpdateAsync(UpdateClassRoomInput input);
        Task<ClassRoomFullOutPut> GetAsync(GetClassRoomInput input);
        Task<List<ClassRoomFullOutPut>> GetListAsync();

    }
}
