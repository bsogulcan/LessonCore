using Abp.Application.Services;
using Abp.Domain.Repositories;
using Lesson.Authorization.Users;
using Lesson.Domain.ClassRoom.Dto;
using Lesson.Domain.Dto;
using Lesson.EntityFrameworkCore.Repositories;
using Lesson.Manager;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.ClassRoom
{
    public class ClassRoomApplicationService : ApplicationService, IClassRoomApplicationService
    {
        private readonly IEntityManager _entityManager;
        private readonly IClassRoomRepository _classRoomRepository;

        public ClassRoomApplicationService(IEntityManager entityManager,
            IClassRoomRepository classRoomRepository)
        {
            _entityManager = entityManager;
            _classRoomRepository = classRoomRepository;
        }
        [HttpPost]

        public async Task<ClassRoomFullOutPut> CreateAsync(CreateClassRoomInput input)
        {
            try
            {
                //var lessons = ObjectMapper.Map<List<Entities.Lesson>>(input.Lessons);
                //var students = ObjectMapper.Map<List<User>>(input.Students);

                var classRoom = new ClassRoom
                {
                    Name = input.Name,
                    Branch = input.Branch,
                    Description = input.Description
                };

                classRoom.Lessons = new List<Entities.Lesson>();
                foreach (var lesson in input.Lessons)
                {
                    classRoom.Lessons.Add(await _entityManager.GetLessonAsync(lesson.Id));
                }

                classRoom.Students = new List<Authorization.Users.User>();
                foreach (var student in input.Students)
                {
                    classRoom.Students.Add(await _entityManager.GetUserAsync(student.Id));
                }

                await _classRoomRepository.InsertAsync(classRoom);
                return ObjectMapper.Map<ClassRoomFullOutPut>(classRoom);

            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpPost]

        public async Task<bool> DeleteAsnyc(DeleteClassRoomInput input)
        {
            var classRoom = await _entityManager.GetClassRoomAsync(input.Id);
            try
            {
                await _classRoomRepository.DeleteAsync(classRoom);
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpPost]

        public async Task<ClassRoomFullOutPut> GetAsync(GetClassRoomInput input)
        {
            var classRoom = await _entityManager.GetClassRoomAsync(input.Id);
            return ObjectMapper.Map<ClassRoomFullOutPut>(classRoom);
        }
        [HttpPost]

        public async Task<List<ClassRoomFullOutPut>> GetListAsync()
        {
            var classRooms = await _classRoomRepository.GetAllListAsync();
            return ObjectMapper.Map<List<ClassRoomFullOutPut>>(classRooms);
        }
        [HttpPost]

        public async Task<ClassRoomFullOutPut> UpdateAsync(UpdateClassRoomInput input)
        {
            var classRoom = await _entityManager.GetClassRoomAsync(input.Id);
            classRoom.Name = input.Name;
            classRoom.Branch = input.Branch;
            classRoom.Description = input.Description;
            classRoom.Lessons.Clear();
            foreach (var lesson in input.Lessons)
            {
                classRoom.Lessons.Add(await _entityManager.GetLessonAsync(lesson.Id));
            }

            classRoom.Students.Clear();
            foreach (var student in input.Students)
            {
                classRoom.Students.Add(await _entityManager.GetUserAsync(student.Id));
            }

            await _classRoomRepository.UpdateAsync(classRoom);

            return ObjectMapper.Map<ClassRoomFullOutPut>(classRoom);
        }
    }
}
