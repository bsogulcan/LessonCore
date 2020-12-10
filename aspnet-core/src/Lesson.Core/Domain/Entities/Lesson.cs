using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities.Auditing;
using Lesson.Authorization.Users;

namespace Lesson.Domain.Entities
{
    public class Lesson:FullAuditedAggregateRoot<int>
    {
        public string Name { get; set; }
        public virtual List<User> Teachers { get; set; }
        public virtual List<ClassRoom.ClassRoom> ClassRooms { get; set; }
    }
}
