using Abp.Domain.Entities;
using Lesson.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.Lesson.Dto
{
    public class LessonFullOutPut:Entity<int>
    {
        public string Name { get; set; }
        public virtual List<UserPartOutPut> Teachers { get; set; }
    }
}
