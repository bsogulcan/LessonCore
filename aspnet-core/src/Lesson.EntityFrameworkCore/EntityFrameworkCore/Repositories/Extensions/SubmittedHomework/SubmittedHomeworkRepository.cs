using Abp.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.EntityFrameworkCore.Repositories
{
    public class SubmittedHomeworkRepository:LessonRepositoryBase<Domain.Entities.SubmittedHomework,int>,ISubmittedHomeworkRepository
    {
        public SubmittedHomeworkRepository(IDbContextProvider<LessonDbContext> dbContextProvider)
            :base(dbContextProvider)
        {

        }
    }
}
