namespace DailyBreadApi.DTOs
{
    public class HomeHabitDto
    {
        public int HabitId { get; set; }
        public string Title { get; set; }
        public bool IsCompletedToday { get; set; }
        public int CurrentStreak { get; set; }
    }
}