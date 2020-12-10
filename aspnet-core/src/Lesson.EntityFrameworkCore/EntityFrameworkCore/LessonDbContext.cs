using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Lesson.Authorization.Roles;
using Lesson.Authorization.Users;
using Lesson.MultiTenancy;
using Lesson.Domain;
using Lesson.Domain.Configurations;
using Lesson.Domain.ClassRoom;
using Lesson.Domain.Entities;

namespace Lesson.EntityFrameworkCore
{
    public class LessonDbContext : AbpZeroDbContext<Tenant, Role, User, LessonDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<ClassRoom> ClassRooms{ get; set; }
        public DbSet<Lesson.Domain.Entities.Lesson> Lessons{ get; set; }
        public DbSet<Homework> Homeworks { get; set; }
        public DbSet<File> Files { get; set; }
        public DbSet<SubmittedHomework> SubmittedHomeworks{ get; set; }
        public DbSet<WatchInfo> WatchInfos { get; set; }
        public LessonDbContext(DbContextOptions<LessonDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new ClassRoomConfiguration());
        }
    }
}
