using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;
namespace Lesson.Controllers
{
    public abstract class LessonControllerBase: AbpController
    {
        protected LessonControllerBase()
        {
            LocalizationSourceName = LessonConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
