using DailyBreadApi.Data;
using DailyBreadApi.Migrations;
using DailyBreadApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DailyBreadApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class PresetHabitController : ControllerBase {
        private readonly AppDbContext _context;

        public PresetHabitController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PresetHabit>>> GetAll()
        {
            return Ok(await _context.PresetHabits.ToListAsync());
        }
        

        
    }
}