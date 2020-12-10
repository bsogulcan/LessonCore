using Abp.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.EntityFrameworkCore.Repositories
{
    public class LessonRepository:LessonRepositoryBase<Domain.Entities.Lesson,int>,ILessonRepository
    {
        public LessonRepository(IDbContextProvider<LessonDbContext> dbContextProvider)
            :base(dbContextProvider)
        {

        }
    }
}
