using Abp.Domain.Entities;
using Lesson.Authorization.Users;
using Lesson.Domain.Dto;
using Lesson.Domain.Lesson.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.Homework.Dto
{
    public class HomeworkFullOutPut:Entity<int>
    {
        public string Summary { get; set; }
        public string Description { get; set; }
        public UserPartOutPut Teacher { get; set; }
        public ClassRoomFullOutPut ClassRoom { get; set; }
        public LessonFullOutPut Lesson { get; set; }
        public List<File.Dto.FilePartOutPut> Files { get; set; }


    }
}
