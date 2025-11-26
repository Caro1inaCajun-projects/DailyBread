using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DailyBreadApi.Migrations
{
    /// <inheritdoc />
    public partial class NewParamHabit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Habits_Users_UserId",
                table: "Habits");

            migrationBuilder.DropIndex(
                name: "IX_Habits_UserId",
                table: "Habits");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Habits",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Habits",
                newName: "completed");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Habits",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "FrequencyPerWeek",
                table: "Habits",
                newName: "category");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Habits",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Habits",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "completed",
                table: "Habits",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "category",
                table: "Habits",
                newName: "FrequencyPerWeek");

            migrationBuilder.CreateIndex(
                name: "IX_Habits_UserId",
                table: "Habits",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Habits_Users_UserId",
                table: "Habits",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
