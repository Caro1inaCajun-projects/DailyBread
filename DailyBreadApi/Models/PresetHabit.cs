namespace DailyBreadApi.Models
{
    public class PresetHabit      
    {
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string icon { get; set; }

        public ICollection<UserHabit> UserHabits { get; set; } = new List<UserHabit>();
    }
}