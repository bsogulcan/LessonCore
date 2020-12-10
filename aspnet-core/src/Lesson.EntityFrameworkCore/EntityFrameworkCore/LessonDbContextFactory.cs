using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Lesson.Configuration;
using Lesson.Web;

namespace Lesson.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class LessonDbContextFactory : IDesignTimeDbContextFactory<LessonDbContext>
    {
        public LessonDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<LessonDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());
            builder.UseLazyLoadingProxies();
            LessonDbContextConfigurer.Configure(builder, configuration.GetConnectionString(LessonConsts.ConnectionStringName));

            return new LessonDbContext(builder.Options);
        }
    }
}
