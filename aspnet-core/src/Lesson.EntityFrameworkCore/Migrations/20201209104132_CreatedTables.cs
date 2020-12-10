using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Lesson.Migrations
{
    public partial class CreatedTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WatchInfo_AbpUsers_UserId",
                table: "WatchInfo");

            migrationBuilder.DropForeignKey(
                name: "FK_WatchInfo_Files_FileId",
                table: "WatchInfo");

            migrationBuilder.DropPrimaryKey(
                name: "PK_WatchInfo",
                table: "WatchInfo");

            migrationBuilder.RenameTable(
                name: "WatchInfo",
                newName: "WatchInfos");

            migrationBuilder.RenameIndex(
                name: "IX_WatchInfo_UserId",
                table: "WatchInfos",
                newName: "IX_WatchInfos_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_WatchInfo_FileId",
                table: "WatchInfos",
                newName: "IX_WatchInfos_FileId");

            migrationBuilder.AddColumn<int>(
                name: "SubmittedHomeworkId",
                table: "Files",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_WatchInfos",
                table: "WatchInfos",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "SubmittedHomeworks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentId = table.Column<long>(type: "bigint", nullable: true),
                    HomeworkId = table.Column<int>(type: "int", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubmittedHomeworks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SubmittedHomeworks_AbpUsers_StudentId",
                        column: x => x.StudentId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SubmittedHomeworks_Homeworks_HomeworkId",
                        column: x => x.HomeworkId,
                        principalTable: "Homeworks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Files_SubmittedHomeworkId",
                table: "Files",
                column: "SubmittedHomeworkId");

            migrationBuilder.CreateIndex(
                name: "IX_SubmittedHomeworks_HomeworkId",
                table: "SubmittedHomeworks",
                column: "HomeworkId");

            migrationBuilder.CreateIndex(
                name: "IX_SubmittedHomeworks_StudentId",
                table: "SubmittedHomeworks",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Files_SubmittedHomeworks_SubmittedHomeworkId",
                table: "Files",
                column: "SubmittedHomeworkId",
                principalTable: "SubmittedHomeworks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_WatchInfos_AbpUsers_UserId",
                table: "WatchInfos",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_WatchInfos_Files_FileId",
                table: "WatchInfos",
                column: "FileId",
                principalTable: "Files",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Files_SubmittedHomeworks_SubmittedHomeworkId",
                table: "Files");

            migrationBuilder.DropForeignKey(
                name: "FK_WatchInfos_AbpUsers_UserId",
                table: "WatchInfos");

            migrationBuilder.DropForeignKey(
                name: "FK_WatchInfos_Files_FileId",
                table: "WatchInfos");

            migrationBuilder.DropTable(
                name: "SubmittedHomeworks");

            migrationBuilder.DropIndex(
                name: "IX_Files_SubmittedHomeworkId",
                table: "Files");

            migrationBuilder.DropPrimaryKey(
                name: "PK_WatchInfos",
                table: "WatchInfos");

            migrationBuilder.DropColumn(
                name: "SubmittedHomeworkId",
                table: "Files");

            migrationBuilder.RenameTable(
                name: "WatchInfos",
                newName: "WatchInfo");

            migrationBuilder.RenameIndex(
                name: "IX_WatchInfos_UserId",
                table: "WatchInfo",
                newName: "IX_WatchInfo_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_WatchInfos_FileId",
                table: "WatchInfo",
                newName: "IX_WatchInfo_FileId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_WatchInfo",
                table: "WatchInfo",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_WatchInfo_AbpUsers_UserId",
                table: "WatchInfo",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_WatchInfo_Files_FileId",
                table: "WatchInfo",
                column: "FileId",
                principalTable: "Files",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
