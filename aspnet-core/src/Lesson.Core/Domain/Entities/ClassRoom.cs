using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities.Auditing;
using Lesson.Authorization.Users;

namespace Lesson.Domain.ClassRoom
{
    public class ClassRoom:FullAuditedAggregateRoot<int>
    {
        public string Name { get; set; }
        public string Branch { get; set; }
        public string Description { get; set; }
        public virtual List<Lesson.Domain.Entities.Lesson> Lessons { get; set; }
        public virtual List<User> Students { get; set; }

    }
}
