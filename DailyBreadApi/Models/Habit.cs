namespace DailyBreadApi.Models
{
    public class Habit
    {
        public int id { get; set; }
        public string name { get; set; }
        public int category { get; set; }
        public int completed { get; set; }
    }
}