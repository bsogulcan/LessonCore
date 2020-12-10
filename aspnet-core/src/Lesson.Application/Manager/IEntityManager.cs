using Abp.Dependency;
using Lesson.Authorization.Users;
using Lesson.Domain;
using Lesson.Domain.ClassRoom;
using Lesson.Domain.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Manager
{
    public interface IEntityManager: ITransientDependency
    {
        Task<ClassRoom> GetClassRoomAsync(int classRoomId);
        Task<Lesson.Domain.Entities.Lesson> GetLessonAsync(int lessonId);
        Task<User> GetUserAsync(long userId);
        Task<Lesson.Domain.Entities.Homework> GetHomeworkAsnyc(int homeworkId);
        Task<Lesson.Domain.Entities.SubmittedHomework> GetSubmittedHomeworkAsync(int submittedHomeworkId);
    }
}
