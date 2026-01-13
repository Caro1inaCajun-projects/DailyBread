using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace DailyBreadApi.Migrations
{
    /// <inheritdoc />
    public partial class AddCompletedHabits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CompletedHabits",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    HabitId = table.Column<int>(type: "integer", nullable: false),
                    PresetHabitid = table.Column<int>(type: "integer", nullable: false),
                    CompletedDate = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompletedHabits", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CompletedHabits_PresetHabits_PresetHabitid",
                        column: x => x.PresetHabitid,
                        principalTable: "PresetHabits",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CompletedHabits_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CompletedHabits_PresetHabitid",
                table: "CompletedHabits",
                column: "PresetHabitid");

            migrationBuilder.CreateIndex(
                name: "IX_CompletedHabits_UserId",
                table: "CompletedHabits",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CompletedHabits");
        }
    }
}
