using AutoMapper;
using Lesson.Authorization.Users;
using Lesson.Domain;
using Lesson.Domain.ClassRoom;
using Lesson.Domain.ClassRoom.Dto;
using Lesson.Domain.Dto;
using Lesson.Domain.File.Dto;
using Lesson.Domain.Homework.Dto;
using Lesson.Domain.Lesson.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Manager
{
    public class MapperManager
    {
        public static void DtosToDomain(IMapperConfigurationExpression cfg)
        {
            #region EntityToDtos
            //User
            cfg.CreateMap<User, UserPartOutPut>();

            //ClassRoom
            cfg.CreateMap<ClassRoom, CreateClassRoomInput>();
            cfg.CreateMap<ClassRoom, GetClassRoomInput>();
            cfg.CreateMap<ClassRoom, DeleteClassRoomInput>();
            cfg.CreateMap<ClassRoom, UpdateClassRoomInput>();
            cfg.CreateMap<ClassRoom, ClassRoomFullOutPut>();

            //Lesson
            cfg.CreateMap<Lesson.Domain.Entities.Lesson, CreateLessonInput>();
            cfg.CreateMap<Lesson.Domain.Entities.Lesson, DeleteLessonInput>();
            cfg.CreateMap<Lesson.Domain.Entities.Lesson, UpdateLessonInput>();
            cfg.CreateMap<Lesson.Domain.Entities.Lesson, GetLessonInput>();
            cfg.CreateMap<Lesson.Domain.Entities.Lesson, LessonFullOutPut>();

            //Homework
            cfg.CreateMap<Lesson.Domain.Entities.Homework, CreateHomeworkInput>();
            cfg.CreateMap<Lesson.Domain.Entities.Homework, DeleteHomeworkInput>();
            cfg.CreateMap<Lesson.Domain.Entities.Homework, UpdateHomeworkInput>();
            cfg.CreateMap<Lesson.Domain.Entities.Homework, GetHomeworkInput>();
            cfg.CreateMap<Lesson.Domain.Entities.Homework, HomeworkFullOutPut>();


            //File
            cfg.CreateMap<Lesson.Domain.Entities.File, FilePartOutPut>();
            cfg.CreateMap<Lesson.Domain.Entities.File, CreateFileInput>();
            #endregion

            #region DtosToEntity
            //Lesson
            cfg.CreateMap<LessonFullOutPut, Lesson.Domain.Entities.Lesson>();

            //User
            cfg.CreateMap<UserPartOutPut, User>();

            #endregion

        }
    }
}