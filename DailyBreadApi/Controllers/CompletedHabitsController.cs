using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using DailyBreadApi.Services;


namespace DailyBreadApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CompletedHabitsController : ControllerBase
    {
        private readonly CompletedHabitService _completedHabitService;

        public CompletedHabitsController(CompletedHabitService completedHabitService)
        {
            _completedHabitService = completedHabitService;
        }

        [HttpGet]
        public async Task<ActionResult<List<int>>> GetCompletedHabits()
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var today = DateOnly.FromDateTime(DateTime.UtcNow);

            var habitIds = await _completedHabitService.GetCompletedHabitsAsync(userId, today);
            return Ok(habitIds);
        }

        [HttpPost("toggle/{habitId}")]
        public async Task<IActionResult> ToggleHabit(int habitId)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var today = DateOnly.FromDateTime(DateTime.UtcNow);

            await _completedHabitService.ToggleHabitAsync(userId, habitId, today);
            return NoContent();
        }
    }
}
