using System.ComponentModel.DataAnnotations;

namespace Lesson.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}