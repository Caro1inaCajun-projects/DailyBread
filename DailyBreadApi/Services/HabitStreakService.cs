namespace DailyBreadApi.Services
{
    public class HabitStreakService
    {
        public int StreakCalculator(List<DateOnly> completedDates)
        {

            var today = DateOnly.FromDateTime(DateTime.UtcNow);
            var yesterday = today.AddDays(-1);
            var streak = 0;

            if (completedDates is null || completedDates.Count() == 0)
            {
                return 0;
            }

            if (completedDates[0] == today)
            {
                var currentDay = today;

                foreach(var date in completedDates)
                {
                    if (date == currentDay)
                    {
                        streak++;
                        currentDay = currentDay.AddDays(-1);
                    }
                    else
                    {
                        return streak;
                    }

                }

            }
            else if (completedDates[0] == yesterday)
            {
                var currentDay = yesterday;

                foreach(var date in completedDates)
                {
                    if (date == currentDay)
                    {
                        streak++;
                        currentDay = currentDay.AddDays(-1);
                    }
                    else
                    {
                        return streak;
                    }
                }
            }
            else
            {
                return 0;
            }

            return streak;
        }
    }
}