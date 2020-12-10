using Abp.Domain.Entities;
using Lesson.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.ClassRoom.Dto
{
    public class UpdateClassRoomInput:Entity<int>
    {
        public string Name { get; set; }
        public string Branch { get; set; }
        public string Description { get; set; }
        public List<Lesson.Dto.LessonFullOutPut> Lessons { get; set; }
        public List<UserPartOutPut> Students { get; set; }


    }
}
