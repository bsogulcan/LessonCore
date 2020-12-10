using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Domain.Configurations
{
    public class ClassRoomConfiguration : IEntityTypeConfiguration<ClassRoom.ClassRoom>
    {
        public void Configure(EntityTypeBuilder<ClassRoom.ClassRoom> builder)
        {
            builder.ToTable("ClassRoom");
            builder.HasKey(builder=>builder.Id);
            builder.Property(builder => builder.Name).HasColumnName("Name").HasMaxLength(10);
        }
    }
}
