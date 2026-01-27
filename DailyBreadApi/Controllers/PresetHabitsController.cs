using DailyBreadApi.Data;
using DailyBreadApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DailyBreadApi.Services;


namespace DailyBreadApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class PresetHabitController : ControllerBase {
        private readonly PresetHabitService _presetHabitService;

        public PresetHabitController(PresetHabitService presetHabitService)
        {
            _presetHabitService = presetHabitService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PresetHabit>>> GetAll()
        {
            var habits = await _presetHabitService.GetAllAsync();
            return Ok(habits);
        }
        

        
    }
}