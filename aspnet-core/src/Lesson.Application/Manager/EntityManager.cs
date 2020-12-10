using Abp.Application.Services;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.UI;
using Lesson.Authorization.Users;
using Lesson.Domain;
using Lesson.Domain.ClassRoom;
using Lesson.Domain.Entities;
using Lesson.EntityFrameworkCore.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Manager
{
    public class EntityManager : ApplicationService, IEntityManager
    {
        private readonly IClassRoomRepository _classRoomRepository;
        private readonly ILessonRepository _lessonRepository;
        private readonly IHomeworkRepository _homeworkEntity;
        private readonly ISubmittedHomeworkRepository _submittedHomeworkRepository;
        private readonly UserManager _userManager;
        
        public EntityManager(IClassRoomRepository classRoomRepository,
            ILessonRepository lessonRepository,
            IHomeworkRepository homeworkEntity,
            ISubmittedHomeworkRepository submittedHomeworkRepository,
            UserManager userManager)
        {
            _classRoomRepository = classRoomRepository;
            _lessonRepository = lessonRepository;
            _homeworkEntity = homeworkEntity;
            _submittedHomeworkRepository = submittedHomeworkRepository;
            _userManager = userManager;
        }

        public async Task<ClassRoom> GetClassRoomAsync(int classRoomId)
        {
            var classRoom = await _classRoomRepository.GetAsync(classRoomId);
            if (classRoom == null)
            {
                throw new EntityNotFoundException(typeof(ClassRoom), classRoomId);
            }
            return classRoom;
        }

        public async Task<Homework> GetHomeworkAsnyc(int homeworkId)
        {
            var homework = await _homeworkEntity.GetAsync(homeworkId);
            if (homework == null)
            {
                throw new EntityNotFoundException(typeof(Homework), homeworkId);
            }
            return homework;
        }

        public async Task<Domain.Entities.Lesson> GetLessonAsync(int lessonId)
        {
            var lesson = await _lessonRepository.GetAsync(lessonId);
            if (lesson == null)
            {
                throw new EntityNotFoundException(typeof(Domain.Entities.Lesson), lesson);
            }
            return lesson;
        }

        public async Task<Domain.Entities.SubmittedHomework> GetSubmittedHomeworkAsync(int submittedHomeworkId)
        {
            var submittedHomework = await _submittedHomeworkRepository.GetAsync(submittedHomeworkId);
            if (submittedHomework == null)
            {
                throw new EntityNotFoundException(typeof(SubmittedHomework), submittedHomework);
            }
            return submittedHomework;
        }

        public async Task<User> GetUserAsync(long userId)
        {
            var user = await _userManager.GetUserByIdAsync(userId);
            if (user==null)
            {
                throw new EntityNotFoundException(typeof(User), user);
            }
            return user;

        }
    }
}
