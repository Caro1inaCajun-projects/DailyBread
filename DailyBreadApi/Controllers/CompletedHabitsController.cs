using DailyBreadApi.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using DailyBreadApi.Models;
using Microsoft.EntityFrameworkCore;


namespace DailyBreadApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CompletedHabitsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CompletedHabitsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<int>>> GetCompletedHabits()
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var today = DateOnly.FromDateTime(DateTime.UtcNow);
            var habitIds = await _context.CompletedHabits
                .Where(ch => ch.UserId == userId && ch.CompletedDate == today)
                .Select(ch => ch.HabitId)
                .ToListAsync();

            return Ok(habitIds);
        }

        [HttpPost("toggle/{habitId}")]
        public async Task<IActionResult> ToggleHabit(int habitId)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var today = DateOnly.FromDateTime(DateTime.UtcNow);

            var existing = await _context.CompletedHabits
                .FirstOrDefaultAsync(ch => ch.UserId == userId && ch.HabitId == habitId && ch.CompletedDate == today);

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
                    CompletedDate = today,
                });
            }

            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
