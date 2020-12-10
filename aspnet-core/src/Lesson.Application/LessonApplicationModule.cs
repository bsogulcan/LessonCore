using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Lesson.Authorization;
using Lesson.Manager;

namespace Lesson
{
    [DependsOn(
        typeof(LessonCoreModule),
        typeof(AbpAutoMapperModule))]
    public class LessonApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<LessonAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(LessonApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);
            Configuration.Modules.AbpAutoMapper().Configurators.Add(cfg =>
            {
                MapperManager.DtosToDomain(cfg);
                cfg.AddMaps(thisAssembly);
            });

        }
    }
}
