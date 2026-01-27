using DailyBreadApi.Data;
using DailyBreadApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DailyBreadApi.Services
{
    public class UserHabitService
    {
        private readonly AppDbContext _context;

        public UserHabitService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<int>> GetUserHabitIdsAsync(int userId)
        {
            return await _context.UserHabits
                .Where(uh => uh.UserId == userId)
                .Select(uh => uh.HabitId)
                .ToListAsync();
        }

        public async Task ToggleHabitAsync(int userId, int habitId)
        {
            var existing = await _context.UserHabits
                .FirstOrDefaultAsync(uh => uh.UserId == userId && uh.HabitId == habitId);

            if (existing != null)
            {
                _context.UserHabits.Remove(existing);
            }
            else
            {
                _context.UserHabits.Add(new UserHabit
                {
                    UserId = userId,
                    HabitId = habitId
                });
            }

            await _context.SaveChangesAsync();
        }
    }
}