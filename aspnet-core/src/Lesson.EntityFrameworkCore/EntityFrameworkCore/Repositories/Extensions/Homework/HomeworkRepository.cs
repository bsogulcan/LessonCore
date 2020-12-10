using Abp.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.EntityFrameworkCore.Repositories
{
    public class HomeworkRepository : LessonRepositoryBase<Domain.Entities.Homework, int>, IHomeworkRepository
    {
        public HomeworkRepository(IDbContextProvider<LessonDbContext> dbContextProvider) 
            : base(dbContextProvider)
        {

        }
    }
}
