using DailyBreadApi.Data;
using DailyBreadApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DailyBreadApi.Services
{
    public class CompletedHabitService
    {
        private readonly AppDbContext _context;

        public CompletedHabitService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<int>> GetCompletedHabitsAsync(int userID, DateOnly date)
        {
            return await _context.CompletedHabits
                .Where(ch => ch.UserId == userID && ch.CompletedDate == date)
                .Select(ch => ch.HabitId)
                .ToListAsync();
        }

        public async Task ToggleHabitAsync(int userId, int habitId, DateOnly date)
        {
            var existing = await _context.CompletedHabits
                .FirstOrDefaultAsync(ch =>
                    ch.UserId == userId &&
                    ch.HabitId == habitId &&
                    ch.CompletedDate == date);

            if (existing != null)
            {
                _context.CompletedHabits.Remove(existing);
            }
            else
            {
                _context.CompletedHabits.Add(new CompletedHabit
                {
                    UserId = userId,
                    HabitId = habitId,
                    CompletedDate = date
                });
            }

            await _context.SaveChangesAsync();
        }
    }
}