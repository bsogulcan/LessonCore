using Abp.Application.Services;
using Lesson.Domain.Homework.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.Homework
{
    public interface IHomeworkApplicationService:IApplicationService
    {
        Task<List<HomeworkFullOutPut>> GetListAsync();
        Task<HomeworkFullOutPut> GetAsync(GetHomeworkInput input);
        Task<HomeworkFullOutPut> CreateAsync(CreateHomeworkInput input);
        Task DeleteAsync(DeleteHomeworkInput input);
        Task<HomeworkFullOutPut> UpdateAsnyc(UpdateHomeworkInput input); 
    }
}
