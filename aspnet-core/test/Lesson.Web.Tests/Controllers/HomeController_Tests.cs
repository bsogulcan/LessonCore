using System.Threading.Tasks;
using Lesson.Models.TokenAuth;
using Lesson.Web.Controllers;
using Shouldly;
using Xunit;

namespace Lesson.Web.Tests.Controllers
{
    public class HomeController_Tests: LessonWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}