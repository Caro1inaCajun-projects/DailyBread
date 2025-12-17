using Microsoft.EntityFrameworkCore;
using DailyBreadApi.Models;

namespace DailyBreadApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<PresetHabit> PresetHabits { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PresetHabit>().HasData(
                    new PresetHabit { id = 1, title = "Pray", description = "Spend some time in prayer", icon = "none"},
                    new PresetHabit { id = 2, title = "Daily Devotional", description = "Find a good devotional and commit to doing one a day", icon = "none" },
                    new PresetHabit { id = 3, title = "A Chapter A Day", description = "Read one chapter out of the Bible", icon = "none" },
                    new PresetHabit { id = 4, title = "Memorize A Verse", description = "Memorize one verse from anywhere in the bible", icon = "none" },
                    new PresetHabit { id = 5, title = "Listen To A Sermon", description = "Find a sermon to listen to", icon = "none" },
                    new PresetHabit { id = 6, title = "Worship", description = "Spend some time in worship whether through song or adoration in prayer", icon = "none" },
                    new PresetHabit { id = 7, title = "Fast", description = "Dedicate some time to fasting from someting (Food, Social Media, TV, etc.)", icon = "none" },
                    new PresetHabit { id = 8, title = "Spiritual Journaling", description = "Reflect on your relationship with God and journal what comes to mind", icon = "none" },
                    new PresetHabit { id = 9, title = "Accountability", description = "Check in with a brother or sister in the faith about something you wish to be held acountable for", icon = "none" },
                    new PresetHabit { id = 10, title = "Exhortation", description = "Reach out to a brother or sister in the faith and lift them up with encouraging words", icon = "none" },
                    new PresetHabit { id = 11, title = "Study Time", description = "Through a passage of scripture, a sermon, or a lecture take some notes", icon = "none" },
                    new PresetHabit { id = 12, title = "Podcast", description = "Listen to an episode of a podcast", icon = "none" },
                    new PresetHabit { id = 13, title = "Mental Health Journaling", description = "Reflect on your life and journal what comes to mind", icon = "none" },
                    new PresetHabit { id = 14, title = "Read A Book", description = "Read one chapter of a book", icon = "none" },
                    new PresetHabit { id = 15, title = "Create A To-Do List", description = "List out what needs to get done today and cross off the list as you go about your day", icon = "none" },
                    new PresetHabit { id = 16, title = "No Phone", description = "Set at least one hour of your day as a time without your phone in sight", icon = "none" },
                    new PresetHabit { id = 17, title = "Stretching + Breathing Exercises", description = "Spend some time stretching or focusing your breathing", icon = "none" },
                    new PresetHabit { id = 18, title = "Complete A Brain Puzzle", description = "Complete on brain puzzle (Sudoku, CrossWord, Wordle, etc.)", icon = "none" },
                    new PresetHabit { id = 19, title = "Clean", description = "Find something around your house or work to clean up", icon = "none" },
                    new PresetHabit { id = 20, title = "Make Your Bed", description = "Make your bed in the morning", icon = "none" },
                    new PresetHabit { id = 21, title = "Learn Something New", description = "Spend 15 minutes learning a new skill", icon = "none" },
                    new PresetHabit { id = 22, title = "Drink Water", description = "Drink at least two bottles of water (1 Liter)", icon = "none" },
                    new PresetHabit { id = 23, title = "Daily Steps", description = "Hit 3,000 steps", icon = "none" },
                    new PresetHabit { id = 24, title = "Workout", description = "Spend at least 30 minutes working out", icon = "none" },
                    new PresetHabit { id = 25, title = "Eat Healthy", description = "Eat one healthy meal", icon = "none" },
                    new PresetHabit { id = 26, title = "Bedtime", description = "Go to bed by a set time", icon = "none" },
                    new PresetHabit { id = 27, title = "Wake Up", description = "Wake up by a set time", icon = "none" }
                );
        }
    }
}