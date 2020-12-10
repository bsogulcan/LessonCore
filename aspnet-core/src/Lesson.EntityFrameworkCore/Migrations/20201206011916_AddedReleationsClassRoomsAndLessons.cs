using Microsoft.EntityFrameworkCore.Migrations;

namespace Lesson.Migrations
{
    public partial class AddedReleationsClassRoomsAndLessons : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClassRoomLesson",
                columns: table => new
                {
                    ClassRoomsId = table.Column<int>(type: "int", nullable: false),
                    LessonsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassRoomLesson", x => new { x.ClassRoomsId, x.LessonsId });
                    table.ForeignKey(
                        name: "FK_ClassRoomLesson_ClassRoom_ClassRoomsId",
                        column: x => x.ClassRoomsId,
                        principalTable: "ClassRoom",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClassRoomLesson_Lessons_LessonsId",
                        column: x => x.LessonsId,
                        principalTable: "Lessons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClassRoomLesson_LessonsId",
                table: "ClassRoomLesson",
                column: "LessonsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClassRoomLesson");
        }
    }
}
