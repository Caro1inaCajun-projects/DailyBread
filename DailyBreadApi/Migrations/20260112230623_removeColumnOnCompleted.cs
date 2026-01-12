using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DailyBreadApi.Migrations
{
    /// <inheritdoc />
    public partial class removeColumnOnCompleted : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompletedHabits_PresetHabits_PresetHabitid",
                table: "CompletedHabits");

            migrationBuilder.DropForeignKey(
                name: "FK_CompletedHabits_Users_UserId",
                table: "CompletedHabits");

            migrationBuilder.DropIndex(
                name: "IX_CompletedHabits_PresetHabitid",
                table: "CompletedHabits");

            migrationBuilder.DropIndex(
                name: "IX_CompletedHabits_UserId",
                table: "CompletedHabits");

            migrationBuilder.DropColumn(
                name: "PresetHabitid",
                table: "CompletedHabits");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PresetHabitid",
                table: "CompletedHabits",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_CompletedHabits_PresetHabitid",
                table: "CompletedHabits",
                column: "PresetHabitid");

            migrationBuilder.CreateIndex(
                name: "IX_CompletedHabits_UserId",
                table: "CompletedHabits",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_CompletedHabits_PresetHabits_PresetHabitid",
                table: "CompletedHabits",
                column: "PresetHabitid",
                principalTable: "PresetHabits",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CompletedHabits_Users_UserId",
                table: "CompletedHabits",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
