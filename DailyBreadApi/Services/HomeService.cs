using DailyBreadApi.DTOs;
using DailyBreadApi.Services;

namespace DailyBreadApi.Services
{
    public class HomeService
    {
        private readonly UserHabitService _userHabitService;
        private readonly PresetHabitService _presetHabitService;
        private readonly CompletedHabitService _completedHabitService;
        private readonly HabitStreakService _habitStreakService;

        public HomeService(
            UserHabitService userHabitService,
            PresetHabitService presetHabitService,
            CompletedHabitService completedHabitService,
            HabitStreakService habitStreakService)
        {
            _userHabitService = userHabitService;
            _presetHabitService = presetHabitService;
            _completedHabitService = completedHabitService;
            _habitStreakService = habitStreakService;
        }

        public async Task<List<HomeHabitDto>> GetHomeHabitsAsync(int userId)
        {
            var today = DateOnly.FromDateTime(DateTime.UtcNow);

            var userHabitIds = await _userHabitService.GetUserHabitIdsAsync(userId);
            var allHabits = await _presetHabitService.GetAllAsync();
            var completedToday = await _completedHabitService.GetCompletedHabitsAsync(userId, today);

            var result = new List<HomeHabitDto>();

            foreach (var habit in allHabits.Where(h => userHabitIds.Contains(h.Id)))
            {
                var history = await _completedHabitService
                    .GetCompletedHabitsHistoryAsync(userId, habit.Id);

                var streak = _habitStreakService.StreakCalculator(history);

                result.Add(new HomeHabitDto
                {
                    HabitId = habit.Id,
                    Title = habit.Title,
                    IsCompletedToday = completedToday.Contains(habit.Id),
                    CurrentStreak = streak
                });
            }

            return result;
        }
    }
}