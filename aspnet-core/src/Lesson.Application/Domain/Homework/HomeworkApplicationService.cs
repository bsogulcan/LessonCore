using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.Web.Models;
using Lesson.Domain.Entities;
using Lesson.Domain.Homework.Dto;
using Lesson.Manager;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;
using System.Globalization;
using Lesson.EntityFrameworkCore.Repositories;

namespace Lesson.Domain.Homework
{
    public class HomeworkApplicationService : ApplicationService, IHomeworkApplicationService
    {
        private readonly IEntityManager _entityManager;
        private readonly IHomeworkRepository _homeworkRepository;

        public HomeworkApplicationService(IEntityManager entityManager,
            IHomeworkRepository homeworkEntity)
        {
            _entityManager = entityManager;
            _homeworkRepository = homeworkEntity;
        }

        [HttpPost]
        public async Task<HomeworkFullOutPut> CreateAsync([FromForm] CreateHomeworkInput input)
        {
            var homework = new Entities.Homework
            {
                Summary = input.Summary,
                Description = input.Description,
                ClassRoomId=input.ClassRoomId,
                LessonId=input.LessonId,
                TeacherId=input.TeacherId
            };
             
            if (input.Files.Count > 0)
            {
                foreach (var file in input.Files)
                {
                    var folderName = Path.Combine("Resources", "Videos");
                    var pathToSave = Path.Combine(@"C:\", folderName);

                    if (!Directory.Exists(pathToSave))
                        Directory.CreateDirectory(pathToSave);


                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    fileName = DateTime.Now.ToString("yyyymmddMMss") + '-' + fileName;
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    using (var fileStream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(fileStream);
                    }

                    var fileHomeWork = new Entities.File
                    {
                        Name = file.FileName,
                        Type = file.ContentType,
                        Size = file.Length,
                        Path = dbPath
                    };
                    homework.Files.Add(fileHomeWork);
                }
            }

            homework = await _homeworkRepository.InsertAsync(homework);
            return ObjectMapper.Map<HomeworkFullOutPut>(homework);
        }

        [HttpPost]
        public async Task DeleteAsync(DeleteHomeworkInput input)
        {
            var homework = await _entityManager.GetHomeworkAsnyc(input.Id);
            await _homeworkRepository.DeleteAsync(homework);
        }

        [HttpPost]
        public async Task<HomeworkFullOutPut> GetAsync(GetHomeworkInput input)
        {
            var homework = await _entityManager.GetHomeworkAsnyc(input.Id);
            return ObjectMapper.Map<HomeworkFullOutPut>(homework);

        }

        [HttpPost]
        public async Task<List<HomeworkFullOutPut>> GetListAsync()
        {
            var homeworks = await _homeworkRepository.GetAllListAsync();
            return ObjectMapper.Map<List<HomeworkFullOutPut>>(homeworks);
        }
        [HttpPost]
        public async Task<HomeworkFullOutPut> UpdateAsnyc([FromForm] UpdateHomeworkInput input)
        {
            var homework = await _entityManager.GetHomeworkAsnyc(input.Id);
            homework.Summary = input.Summary;
            homework.Description = input.Description;
            homework.ClassRoomId =input.ClassRoomId;
            homework.TeacherId = input.TeacherId;
            homework.LessonId = input.LessonId;
            //homework.Files = new List<Entities.File>();

            if (input.Files != null && input.Files.Count > 0)
            {
                //homework.Files.Clear();

                foreach (var file in input.Files)
                {
                    var folderName = Path.Combine("Resources", "Videos");
                    var pathToSave = Path.Combine(@"C:\", folderName);

                    if (!Directory.Exists(pathToSave))
                        Directory.CreateDirectory(pathToSave);


                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    fileName = DateTime.Now.ToString("yyyymmddMMss") + '-' + fileName;
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    using (var fileStream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(fileStream);
                    }

                    var fileHomeWork = new Entities.File
                    {
                        Name = file.FileName,
                        Type = file.ContentType,
                        Size = file.Length,
                        Path = fullPath
                    };
                    homework.Files.Add(fileHomeWork);
                }
            }


            await _homeworkRepository.UpdateAsync(homework);
            return ObjectMapper.Map<HomeworkFullOutPut>(homework);
        }
    }
}