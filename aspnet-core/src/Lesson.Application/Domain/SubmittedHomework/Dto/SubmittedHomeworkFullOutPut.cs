using Abp.Domain.Entities;
using Lesson.Authorization.Users;
using Lesson.Domain.File.Dto;
using Lesson.Domain.Homework.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.SubmittedHomework.Dto
{
    public class SubmittedHomeworkFullOutPut:Entity<int>
    {
        public UserPartOutPut Student { get; set; }
        public HomeworkFullOutPut Homework { get; set; }
        public List<FilePartOutPut> Files { get; set; }
    }
}
