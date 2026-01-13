namespace DailyBreadApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string UserName { get; set; }
        public int XP { get; set; }
        public int Level { get; set; }
        public ICollection<UserHabit> UserHabits { get; set; } = new List<UserHabit>();
    }
}