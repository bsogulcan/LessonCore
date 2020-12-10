using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.Web.Models;
using Lesson.EntityFrameworkCore.Repositories;
using Lesson.Manager;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.File
{
    public class FileApplicationService : ApplicationService, IFileApplicationService
    {
        private readonly IEntityManager _entityManager;
        private readonly IFileRepository _fileRepository;
        private readonly IHomeworkRepository _homeworkRepository;

        public FileApplicationService(IEntityManager entityManager,
            IFileRepository fileRepository,
            IHomeworkRepository homeworkRepository)
        {
            _entityManager = entityManager;
            _fileRepository = fileRepository;
            _homeworkRepository = homeworkRepository;
        }

        //[DontWrapResult]
        //[HttpPost, DisableRequestSizeLimit]
        //public async Task CreateHomeworkFileAsync(List<IFormFile> files,int homeworkId)
        //{
        //    //var homework = await _entityManager.GetHomeworkAsnyc(homeworkId);
        //    //homework.Files.Clear();

        //    //if (files.Count > 0)
        //    //{
        //    //    foreach (var file in files)
        //    //    {
        //    //        using (var ms = new MemoryStream())
        //    //        {
        //    //            file.CopyTo(ms);
        //    //            var fileBytes = ms.ToArray();

        //    //            var fileHomeWork = new Entities.File
        //    //            {
        //    //                Name = file.FileName,
        //    //                Type = file.ContentType,
        //    //                Size = file.Length,
        //    //                Content = fileBytes
        //    //            };
        //    //            homework.Files.Add(fileHomeWork);


        //    //            await _homeworkRepository.UpdateAsync(homework);
        //    //        } 
        //    //    }

        //    //}
        //}
    }
}
