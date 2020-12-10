using Abp.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.EntityFrameworkCore.Repositories
{
    public class ClassRoomRepository:LessonRepositoryBase<Domain.ClassRoom.ClassRoom,int>,IClassRoomRepository
    {
        public ClassRoomRepository(IDbContextProvider<LessonDbContext> dbContextProvider)
            :base(dbContextProvider)
        {

        }
    }
}
