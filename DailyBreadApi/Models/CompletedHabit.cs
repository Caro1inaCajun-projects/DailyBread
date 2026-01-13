namespace DailyBreadApi.Models
{
    public class CompletedHabit
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int HabitId { get; set; }
        public DateOnly CompletedDate { get; set; }
    }
}