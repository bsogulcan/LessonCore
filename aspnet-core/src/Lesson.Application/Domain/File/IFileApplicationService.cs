using Abp.Application.Services;
using Lesson.Domain.File.Dto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.File
{
    public interface IFileApplicationService:IApplicationService
    {
        //Task CreateHomeworkFileAsync(List<IFormFile> files, int homeworkId);
    }
}
