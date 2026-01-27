using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DailyBreadApi.Migrations
{
    /// <inheritdoc />
    public partial class RenamePresetHabitId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "title",
                table: "PresetHabits",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "icon",
                table: "PresetHabits",
                newName: "Icon");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "PresetHabits",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "PresetHabits",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "PresetHabits",
                newName: "title");

            migrationBuilder.RenameColumn(
                name: "Icon",
                table: "PresetHabits",
                newName: "icon");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "PresetHabits",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "PresetHabits",
                newName: "id");
        }
    }
}
