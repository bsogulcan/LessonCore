using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.EntityFrameworkCore.Repositories
{
    public interface ILessonRepository:IRepository<Domain.Entities.Lesson,int>
    {
    }
}