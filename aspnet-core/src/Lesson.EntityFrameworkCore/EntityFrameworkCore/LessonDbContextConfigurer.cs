using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Lesson.EntityFrameworkCore
{
    public static class LessonDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<LessonDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<LessonDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
