using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities.Auditing;
using Lesson.Authorization.Users;
using Lesson.Domain.Entities;
namespace Lesson.Domain.Entities
{
    public class Homework:FullAuditedAggregateRoot<int>
    {

        public Homework()
        {
            Files = new HashSet<File>();
        }
        public string Summary { get; set; }
        public string Description { get; set; }
        public long? TeacherId { get; set; }
        public virtual User Teacher { get; set; }
        public int? ClassRoomId { get; set; }
        public virtual ClassRoom.ClassRoom  ClassRoom { get; set; }
        public int? LessonId { get; set; }
        public virtual Entities.Lesson Lesson { get; set; }
        public virtual ICollection<File> Files { get; set; }

    }
}
