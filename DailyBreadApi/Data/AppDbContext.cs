using Microsoft.EntityFrameworkCore;
using DailyBreadApi.Models;

namespace DailyBreadApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<PresetHabit> PresetHabits { get; set; }
        public DbSet<UserHabit> UserHabits { get; set; }
        public DbSet<CompletedHabit> CompletedHabits { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PresetHabit>().HasData(
                    new PresetHabit { Id = 1, Title = "Pray", Description = "Spend some time in prayer", Icon = "none"},
                    new PresetHabit { Id = 2, Title = "Daily Devotional", Description = "Find a good devotional and commit to doing one a day", Icon = "none" },
                    new PresetHabit { Id = 3, Title = "A Chapter A Day", Description = "Read one chapter out of the Bible", Icon = "none" },
                    new PresetHabit { Id = 4, Title = "Memorize A Verse", Description = "Memorize one verse from anywhere in the bible", Icon = "none" },
                    new PresetHabit { Id = 5, Title = "Listen To A Sermon", Description = "Find a sermon to listen to", Icon = "none" },
                    new PresetHabit { Id = 6, Title = "Worship", Description = "Spend some time in worship whether through song or adoration in prayer", Icon = "none" },
                    new PresetHabit { Id = 7, Title = "Fast", Description = "Dedicate some time to fasting from someting (Food, Social Media, TV, etc.)", Icon = "none" },
                    new PresetHabit { Id = 8, Title = "Spiritual Journaling", Description = "Reflect on your relationship with God and journal what comes to mind", Icon = "none" },
                    new PresetHabit { Id = 9, Title = "Accountability", Description = "Check in with a brother or sister in the faith about something you wish to be held acountable for", Icon = "none" },
                    new PresetHabit { Id = 10, Title = "Exhortation", Description = "Reach out to a brother or sister in the faith and lift them up with encouraging words", Icon = "none" },
                    new PresetHabit { Id = 11, Title = "Study Time", Description = "Through a passage of scripture, a sermon, or a lecture take some notes", Icon = "none" },
                    new PresetHabit { Id = 12, Title = "Podcast", Description = "Listen to an episode of a podcast", Icon = "none" },
                    new PresetHabit { Id = 13, Title = "Mental Health Journaling", Description = "Reflect on your life and journal what comes to mind", Icon = "none" },
                    new PresetHabit { Id = 14, Title = "Read A Book", Description = "Read one chapter of a book", Icon = "none" },
                    new PresetHabit { Id = 15, Title = "Create A To-Do List", Description = "List out what needs to get done today and cross off the list as you go about your day", Icon = "none" },
                    new PresetHabit { Id = 16, Title = "No Phone", Description = "Set at least one hour of your day as a time without your phone in sight", Icon = "none" },
                    new PresetHabit { Id = 17, Title = "Stretching + Breathing Exercises", Description = "Spend some time stretching or focusing your breathing", Icon = "none" },
                    new PresetHabit { Id = 18, Title = "Complete A Brain Puzzle", Description = "Complete on brain puzzle (Sudoku, CrossWord, Wordle, etc.)", Icon = "none" },
                    new PresetHabit { Id = 19, Title = "Clean", Description = "Find something around your house or work to clean up", Icon = "none" },
                    new PresetHabit { Id = 20, Title = "Make Your Bed", Description = "Make your bed in the morning", Icon = "none" },
                    new PresetHabit { Id = 21, Title = "Learn Something New", Description = "Spend 15 minutes learning a new skill", Icon = "none" },
                    new PresetHabit { Id = 22, Title = "Drink Water", Description = "Drink at least two bottles of water (1 Liter)", Icon = "none" },
                    new PresetHabit { Id = 23, Title = "Daily Steps", Description = "Hit 3,000 steps", Icon = "none" },
                    new PresetHabit { Id = 24, Title = "Workout", Description = "Spend at least 30 minutes working out", Icon = "none" },
                    new PresetHabit { Id = 25, Title = "Eat Healthy", Description = "Eat one healthy meal", Icon = "none" },
                    new PresetHabit { Id = 26, Title = "Bedtime", Description = "Go to bed by a set time", Icon = "none" },
                    new PresetHabit { Id = 27, Title = "Wake Up", Description = "Wake up by a set time", Icon = "none" }
                );

            modelBuilder.Entity<UserHabit>()
            .HasIndex(uh => new { uh.UserId, uh.HabitId })
            .IsUnique();

            modelBuilder.Entity<UserHabit>()
                .HasOne(uh => uh.User)
                .WithMany(u => u.UserHabits)
                .HasForeignKey(uh => uh.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<UserHabit>()
                .HasOne(uh => uh.PresetHabit)
                .WithMany(h => h.UserHabits)
                .HasForeignKey(uh => uh.HabitId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}