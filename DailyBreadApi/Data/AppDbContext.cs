using Microsoft.EntityFrameworkCore;
using DailyBreadApi.Models;

namespace DailyBreadApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Habit> Habits { get; set; }
    }
}