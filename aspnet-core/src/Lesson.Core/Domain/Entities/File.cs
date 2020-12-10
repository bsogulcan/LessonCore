using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities.Auditing;
namespace Lesson.Domain.Entities
{
    public class File : FullAuditedAggregateRoot<int>
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public long Size { get; set; }
        public string Path { get; set; }
        public virtual List<Homework> Homeworks { get; set; }
        public virtual List<WatchInfo> WatchInfos { get; set; }
    }
}
