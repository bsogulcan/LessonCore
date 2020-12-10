using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.File.Dto
{
    public class FilePartOutPut:Entity<int>
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public long Size { get; set; }
        public string Path { get; set; }
    }
}
