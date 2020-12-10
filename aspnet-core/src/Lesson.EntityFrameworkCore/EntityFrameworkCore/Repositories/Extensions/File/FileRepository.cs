﻿using Abp.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.EntityFrameworkCore.Repositories
{
    public class FileRepository : LessonRepositoryBase<Domain.Entities.File>, IFileRepository
    {
        public FileRepository(IDbContextProvider<LessonDbContext> dbContextProvider)
            :base(dbContextProvider)
        {

        }
    }
}
