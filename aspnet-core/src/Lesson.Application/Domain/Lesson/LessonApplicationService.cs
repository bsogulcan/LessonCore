using Abp.Application.Services;
using Abp.Domain.Repositories;
using Lesson.Domain.Lesson.Dto;
using Lesson.Manager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lesson.Domain.Entities;
using Abp.UI;
using Microsoft.AspNetCore.Mvc;
using Lesson.Authorization.Users;
using Lesson.EntityFrameworkCore.Repositories;

namespace Lesson.Domain.Lesson
{
    public class LessonApplicationService : ApplicationService, ILessonApplicationService
    {
        private readonly IEntityManager _entityManager;
        private readonly ILessonRepository _lessonRepository;

        public LessonApplicationService(IEntityManager entityManager,
            ILessonRepository lessonRepository)
        {
            _entityManager = entityManager;
            _lessonRepository = lessonRepository;
        }

        [HttpPost]
        public async Task<LessonFullOutPut> CreateAsync(CreateLessonInput input)
        {
            var lesson = new Entities.Lesson
            {
                Name = input.Name,
                Teachers = new List<User>()
            };

            if (_lessonRepository.Count(x=>x.Name==lesson.Name)>0)
                throw new UserFriendlyException("There is allready added Lesson with same name "+lesson.Name);

            foreach (var teacher in input.Teachers)
            {
                lesson.Teachers.Add(await _entityManager.GetUserAsync(teacher.Id));
            }

            await _lessonRepository.InsertAsync(lesson);
            return ObjectMapper.Map<LessonFullOutPut>(lesson);
        }
        [HttpPost]
        public async Task DeleteAsync(DeleteLessonInput input)
        {
            var lesson = await _entityManager.GetLessonAsync(input.Id);
            await _lessonRepository.DeleteAsync(lesson);
        }
        [HttpPost]
        public async Task<LessonFullOutPut> GetAsync(GetLessonInput input)
        {
            var lesson = await _entityManager.GetLessonAsync(input.Id);
            return ObjectMapper.Map<LessonFullOutPut>(lesson);

        }
        [HttpPost]
        public List<LessonFullOutPut> GetLessonsByClassRoomId(GetLessonInput input)
        {
            var lessons = _lessonRepository.GetAllIncluding().Where(x=>x.ClassRooms.Any(c=>c.Id==input.ClassRoomId)).ToList();
            return ObjectMapper.Map<List<LessonFullOutPut>>(lessons);
        }

        [HttpPost]
        public async Task<List<LessonFullOutPut>> GetListAsync()
        {
            var lessons = await _lessonRepository.GetAllListAsync();
            return ObjectMapper.Map<List<LessonFullOutPut>>(lessons);
        }

        [HttpPost]
        public async Task<LessonFullOutPut> UpdateAsync(UpdateLessonInput input)
        {
            var lesson = await _entityManager.GetLessonAsync(input.Id);
            lesson.Name = input.Name;
            lesson.Teachers.Clear();
            foreach (var teacher in input.Teachers)
            {
                lesson.Teachers.Add(await _entityManager.GetUserAsync(teacher.Id));
            }


            await _lessonRepository.UpdateAsync(lesson);
            
            return ObjectMapper.Map<LessonFullOutPut>(lesson);
        }
    }
}
