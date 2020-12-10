using Abp.Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.SubmittedHomework.Dto
{
    public class UpdateSubmittedHomeworkInput:Entity<int>
    {
        public long StudentId { get; set; }
        public int HomeworkId { get; set; }
        public List<IFormFile> Files { get; set; } 
    }
}
