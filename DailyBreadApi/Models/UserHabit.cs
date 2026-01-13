namespace DailyBreadApi.Models
{
    public class UserHabit
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public int HabitId { get; set; }

        public User User { get; set; } = null!;
        public PresetHabit PresetHabit { get; set; } = null!;
    }
}
