using Abp.Application.Services;
using Lesson.Domain.Lesson.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.Lesson
{
    public interface ILessonApplicationService:IApplicationService
    {
        Task<LessonFullOutPut> CreateAsync(CreateLessonInput input);
        Task<List<LessonFullOutPut>> GetListAsync();
        Task<LessonFullOutPut> GetAsync(GetLessonInput input);
        Task<LessonFullOutPut> UpdateAsync(UpdateLessonInput input);
        Task DeleteAsync(DeleteLessonInput input);
        List<LessonFullOutPut> GetLessonsByClassRoomId(GetLessonInput input);

    }
}
