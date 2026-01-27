using DailyBreadApi.Data;
using DailyBreadApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DailyBreadApi.Services
{
    public class PresetHabitService
    {
        private readonly AppDbContext _context;

        public PresetHabitService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<PresetHabit>> GetAllAsync()
        {
            return await _context.PresetHabits.ToListAsync();
        }
    }
}