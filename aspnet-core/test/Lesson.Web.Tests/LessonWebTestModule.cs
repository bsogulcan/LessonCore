using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Lesson.EntityFrameworkCore;
using Lesson.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Lesson.Web.Tests
{
    [DependsOn(
        typeof(LessonWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class LessonWebTestModule : AbpModule
    {
        public LessonWebTestModule(LessonEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(LessonWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(LessonWebMvcModule).Assembly);
        }
    }
}