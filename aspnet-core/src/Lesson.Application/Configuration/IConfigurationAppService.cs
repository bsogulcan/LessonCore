using System.Threading.Tasks;
using Lesson.Configuration.Dto;

namespace Lesson.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
