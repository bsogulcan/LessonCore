using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.Homework.Dto
{
    public class CreateHomeworkInput
    {
        public string Summary { get; set; }
        public string Description { get; set; }
        public long TeacherId { get; set; }
        public int ClassRoomId{ get; set; }
        public int LessonId { get; set; }
        public List<IFormFile> Files { get; set; }

    }
}
