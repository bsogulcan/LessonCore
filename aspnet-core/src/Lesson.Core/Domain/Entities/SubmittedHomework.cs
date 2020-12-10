using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities.Auditing;
using Lesson.Authorization.Users;

namespace Lesson.Domain.Entities
{
    public class SubmittedHomework : FullAuditedAggregateRoot<int>
    {
        public virtual User Student { get; set; }
        public virtual Homework Homework { get; set; }
        public virtual List<File> Files { get; set; } 
    }
}
