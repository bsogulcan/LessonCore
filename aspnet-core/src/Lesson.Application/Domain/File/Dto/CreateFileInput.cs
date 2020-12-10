using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.File.Dto
{
    public class CreateFileInput
    {
        public List<IFormFile> Files { get; set; }
        public Homework.Dto.HomeworkFullOutPut Homework { get; set; }
    }
}
