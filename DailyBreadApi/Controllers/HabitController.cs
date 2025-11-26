using Microsoft.AspNetCore.Mvc;

namespace DailyBreadApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HabitController : ControllerBase
    {
        // GET: api/habit/health
        [HttpGet("health")]
        public IActionResult HealthCheck()
        {
            return Ok(new { status = "Backend is running!" });
        }
    }
}