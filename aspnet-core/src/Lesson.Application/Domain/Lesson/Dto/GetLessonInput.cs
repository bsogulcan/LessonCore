using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.Lesson.Dto
{
    public class GetLessonInput : Entity<int>
    {
        public int ClassRoomId { get; set; }
    }
}
