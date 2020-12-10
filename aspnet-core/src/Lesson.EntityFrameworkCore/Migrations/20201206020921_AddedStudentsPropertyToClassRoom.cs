using Microsoft.EntityFrameworkCore.Migrations;

namespace Lesson.Migrations
{
    public partial class AddedStudentsPropertyToClassRoom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateTable(
                name: "ClassRoomUser",
                columns: table => new
                {
                    ClassRoomsId = table.Column<int>(type: "int", nullable: false),
                    StudentsId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassRoomUser", x => new { x.ClassRoomsId, x.StudentsId });
                    table.ForeignKey(
                        name: "FK_ClassRoomUser_AbpUsers_StudentsId",
                        column: x => x.StudentsId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClassRoomUser_ClassRoom_ClassRoomsId",
                        column: x => x.ClassRoomsId,
                        principalTable: "ClassRoom",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClassRoomUser_StudentsId",
                table: "ClassRoomUser",
                column: "StudentsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClassRoomUser");

            migrationBuilder.AddColumn<int>(
                name: "ClassRoomId",
                table: "AbpUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AbpUsers_ClassRoomId",
                table: "AbpUsers",
                column: "ClassRoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_AbpUsers_ClassRoom_ClassRoomId",
                table: "AbpUsers",
                column: "ClassRoomId",
                principalTable: "ClassRoom",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
