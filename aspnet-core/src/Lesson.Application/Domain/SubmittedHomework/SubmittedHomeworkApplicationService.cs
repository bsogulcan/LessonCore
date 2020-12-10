using Abp.Application.Services;
using Abp.Domain.Repositories;
using Lesson.Domain.SubmittedHomework.Dto;
using Lesson.EntityFrameworkCore.Repositories;
using Lesson.Manager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.SubmittedHomework
{
    public class SubmittedHomeworkApplicationService : ApplicationService, ISubmittedHomeworkApplicationService
    {
        private readonly IEntityManager _entityManager;
        private readonly ISubmittedHomeworkRepository _submittedHomeworkRepository;

        public SubmittedHomeworkApplicationService(ISubmittedHomeworkRepository submittedHomeworkRepository,
            IEntityManager entityManager)
        {
            _submittedHomeworkRepository = submittedHomeworkRepository;
            _entityManager = entityManager;
        }

        public async Task<SubmittedHomeworkFullOutPut> CreateAsync(CreateSubmittedHomeworkInput input)
        {
            var submittedHomework = new Entities.SubmittedHomework
            {
                Files = new List<Entities.File>(), //Todo Files
                Student = await _entityManager.GetUserAsync(input.StudentId),
                Homework = await _entityManager.GetHomeworkAsnyc(input.HomeworkId)
            };


            await _submittedHomeworkRepository.InsertAsync(submittedHomework);

            return ObjectMapper.Map<SubmittedHomeworkFullOutPut>(submittedHomework);
        }

        public async Task DeleteAsync(DeleteSubmittedHomeworkInput input)
        {
            var submittedHomework = await _entityManager.GetSubmittedHomeworkAsync(input.Id);
            await _submittedHomeworkRepository.DeleteAsync(submittedHomework);
        }

        public async Task<SubmittedHomeworkFullOutPut> GetAsync(GetSubmittedHomeworkInput input)
        {
            var submittedHomework = await _entityManager.GetSubmittedHomeworkAsync(input.Id);
            return ObjectMapper.Map<SubmittedHomeworkFullOutPut>(submittedHomework);
        }

        public async Task<List<SubmittedHomeworkFullOutPut>> GetListAsync()
        {
            var submittedHomeworks = await _submittedHomeworkRepository.GetAllListAsync();
            return ObjectMapper.Map<List<SubmittedHomeworkFullOutPut>>(submittedHomeworks);
        }

        public async Task<SubmittedHomeworkFullOutPut> UpdateAsnyc(UpdateSubmittedHomeworkInput input)
        {
            var submittedHomework = await _entityManager.GetSubmittedHomeworkAsync(input.Id);
            submittedHomework.Files = new List<Entities.File>();  //Todo Files

            await _submittedHomeworkRepository.UpdateAsync(submittedHomework);
            return ObjectMapper.Map<SubmittedHomeworkFullOutPut>(submittedHomework);
        }
    }
}
