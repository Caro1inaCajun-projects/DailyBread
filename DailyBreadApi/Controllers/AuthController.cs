using DailyBreadApi.Data;
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
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;

        public AuthController(AppDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] SignUpDto request)
        {
            // Check if email already exists to prevent duplicate accounts
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

            if (existingUser != null)
            {
                return BadRequest("Email already in use.");

            }

            //Create the user object
            var user = new User
            {
                Email = request.Email,
                PasswordHash = request.Password,
                UserName = request.UserName,
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User created.");
        }

        public class SignUpDto
        {
            public string Email { get; set; }
            public string Password { get; set; }
            public string UserName { get; set; }
        }
    }
}