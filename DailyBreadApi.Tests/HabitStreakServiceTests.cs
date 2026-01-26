using DailyBreadApi.Data;
using DailyBreadApi.Services;
using Microsoft.EntityFrameworkCore;
using Xunit;

public class HabitStreakServiceTests
{

    [Fact]
    public void Streak_ZeroDays_ReturnsZero()
    {
        var service = new HabitStreakService();

        var dates = new List<DateOnly>();

        var streak = service.StreakCalculator(dates);

        Assert.Equal(0, streak);
    }

    [Fact]
    public void Streak_CompletedToday_ReturnsOne()
    {
        var service = new HabitStreakService();
        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        var dates = new List<DateOnly> { today };

        var streak = service.StreakCalculator(dates);

        Assert.Equal(1, streak);
    }

    [Fact]
    public void Streak_CompletedYesterday_ReturnsOne()
    {
        var service = new HabitStreakService();
        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        var yesterday = today.AddDays(-1);
        var dates = new List<DateOnly> {  yesterday };

        var streak = service.StreakCalculator(dates);

        Assert.Equal(1, streak);
    }

    [Fact]
    public void Streak_CompletedTwice_ReturnsTwo()
    {
        var service = new HabitStreakService();
        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        var yesterday = today.AddDays(-1);
        var dates = new List<DateOnly> { today, yesterday };

        var streak = service.StreakCalculator(dates);

        Assert.Equal(2, streak);
    }

    [Fact]
    public void Streak_GapInCompletion_ReturnsOne()
    {
        var service = new HabitStreakService();
        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        var dates = new List<DateOnly> { today, today.AddDays(-2) };

        var streak = service.StreakCalculator(dates);

        Assert.Equal(1, streak);
    }

    [Fact]
    public void Streak_LongStreakCompletedToday_ReturnsFour()
    {
        var service = new HabitStreakService();
        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        var dates = new List<DateOnly> { today, today.AddDays(-1), today.AddDays(-2), today.AddDays(-3) };

        var streak = service.StreakCalculator(dates);

        Assert.Equal(4, streak);
    }

    [Fact]
    public void Streak_LongStreakPendingToday_ReturnsFour()
    {
        var service = new HabitStreakService();
        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        var dates = new List<DateOnly> { today.AddDays(-1), today.AddDays(-2), today.AddDays(-3), today.AddDays(-4) };
        
        var streak = service.StreakCalculator(dates);

        Assert.Equal(4, streak);
    }

    [Fact]
    public void Streak_HistoryBroken_ReturnsZero()
    {
        var service = new HabitStreakService();
        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        var dates = new List<DateOnly> { today.AddDays(-3), today.AddDays(-4) };

        var streak = services.StreakCalculator(dates);

        Assert.Equal(0, streak);
    }
}