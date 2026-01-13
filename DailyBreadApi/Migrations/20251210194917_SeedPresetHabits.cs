using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DailyBreadApi.Migrations
{
    /// <inheritdoc />
    public partial class SeedPresetHabits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "PresetHabits",
                columns: new[] { "id", "description", "icon", "title" },
                values: new object[,]
                {
                    { 1, "Spend some time in prayer", "none", "Pray" },
                    { 2, "Find a good devotional and commit to doing one a day", "none", "Daily Devotional" },
                    { 3, "Read one chapter out of the Bible", "none", "A Chapter A Day" },
                    { 4, "Memorize one verse from anywhere in the bible", "none", "Memorize A Verse" },
                    { 5, "Find a sermon to listen to", "none", "Listen To A Sermon" },
                    { 6, "Spend some time in worship whether through song or adoration in prayer", "none", "Worship" },
                    { 7, "Dedicate some time to fasting from someting (Food, Social Media, TV, etc.)", "none", "Fast" },
                    { 8, "Reflect on your relationship with God and journal what comes to mind", "none", "Spiritual Journaling" },
                    { 9, "Check in with a brother or sister in the faith about something you wish to be held acountable for", "none", "Accountability" },
                    { 10, "Reach out to a brother or sister in the faith and lift them up with encouraging words", "none", "Exhortation" },
                    { 11, "Through a passage of scripture, a sermon, or a lecture take some notes", "none", "Study Time" },
                    { 12, "Listen to an episode of a podcast", "none", "Podcast" },
                    { 13, "Reflect on your life and journal what comes to mind", "none", "Mental Health Journaling" },
                    { 14, "Read one chapter of a book", "none", "Read A Book" },
                    { 15, "List out what needs to get done today and cross off the list as you go about your day", "none", "Create A To-Do List" },
                    { 16, "Set at least one hour of your day as a time without your phone in sight", "none", "No Phone" },
                    { 17, "Spend some time stretching or focusing your breathing", "none", "Stretching + Breathing Exercises" },
                    { 18, "Complete on brain puzzle (Sudoku, CrossWord, Wordle, etc.)", "none", "Complete A Brain Puzzle" },
                    { 19, "Find something around your house or work to clean up", "none", "Clean" },
                    { 20, "Make your bed in the morning", "none", "Make Your Bed" },
                    { 21, "Spend 15 minutes learning a new skill", "none", "Learn Something New" },
                    { 22, "Drink at least two bottles of water (1 Liter)", "none", "Drink Water" },
                    { 23, "Hit 3,000 steps", "none", "Daily Steps" },
                    { 24, "Spend at least 30 minutes working out", "none", "Workout" },
                    { 25, "Eat one healthy meal", "none", "Eat Healthy" },
                    { 26, "Go to bed by a set time", "none", "Bedtime" },
                    { 27, "Wake up by a set time", "none", "Wake Up" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "PresetHabits",
                keyColumn: "id",
                keyValue: 27);
        }
    }
}
