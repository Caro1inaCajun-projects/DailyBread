using DailyBreadApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Formats.Asn1;
using System.Security.Claims;
using DailyBreadApi.Models;
using Microsoft.AspNetCore.Authorization;

namespace DailyBreadApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserHabitsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserHabitsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<int>>> GetUserHabits()
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var habitIds = await _context.UserHabits
                .Where(uh => uh.UserId == userId)
                .Select(uh => uh.HabitId)
                .ToListAsync();

            return Ok(habitIds);
        }

        [HttpPost("toggle/{habitId}")]
        public async Task<IActionResult> ToggleHabit(int habitId)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

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
            return NoContent();
        }
    }
    
}
