namespace DailyBreadApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public int XP { get; set; }
        public int Level { get; set; }
    }
}