namespace DailyBreadApi.Models
{
    public class PresetHabit      
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Icon { get; set; }

        public ICollection<UserHabit> UserHabits { get; set; } = new List<UserHabit>();
    }
}