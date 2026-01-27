using DailyBreadApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using DailyBreadApi.Models;
using Microsoft.AspNetCore.Authorization;
using DailyBreadApi.Services;

namespace DailyBreadApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserHabitsController : ControllerBase
    {
        private readonly UserHabitService _userHabitService;

        public UserHabitsController(UserHabitService userHabitService)
        {
            _userHabitService = userHabitService;
        }

        [HttpGet]
        public async Task<ActionResult<List<int>>> GetUserHabits()
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

            var habitIds = await _userHabitService.GetUserHabitIdsAsync(userId);
            return Ok(habitIds);
        }

        [HttpPost("toggle/{habitId}")]
        public async Task<IActionResult> ToggleHabit(int habitId)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

            await _userHabitService.ToggleHabitAsync(userId, habitId);
            return NoContent();
        }
    }
    
}
