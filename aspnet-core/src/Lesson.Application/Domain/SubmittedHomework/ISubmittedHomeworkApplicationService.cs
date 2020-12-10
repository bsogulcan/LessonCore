using Abp.Application.Services;
using Lesson.Domain.SubmittedHomework.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.SubmittedHomework
{
    public interface ISubmittedHomeworkApplicationService:IApplicationService
    {
        Task<List<SubmittedHomeworkFullOutPut>> GetListAsync();
        Task<SubmittedHomeworkFullOutPut> GetAsync(GetSubmittedHomeworkInput input);
        Task<SubmittedHomeworkFullOutPut> CreateAsync(CreateSubmittedHomeworkInput input);
        Task DeleteAsync(DeleteSubmittedHomeworkInput input);
        Task<SubmittedHomeworkFullOutPut> UpdateAsnyc(UpdateSubmittedHomeworkInput input);
    }
}
