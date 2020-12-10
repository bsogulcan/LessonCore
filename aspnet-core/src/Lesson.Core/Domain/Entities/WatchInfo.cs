using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities.Auditing;
using Lesson.Authorization.Users;

namespace Lesson.Domain.Entities
{
    public class WatchInfo:FullAuditedAggregateRoot<int>
    {
        public virtual User User { get; set; }
        public virtual File File { get; set; }
        public bool Completed { get; set; }
        public int CurrentTime { get; set; }
    }
}
