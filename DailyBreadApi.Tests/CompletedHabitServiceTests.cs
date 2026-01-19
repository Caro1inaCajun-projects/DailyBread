using DailyBreadApi.Data;
using DailyBreadApi.Services;
using Microsoft.EntityFrameworkCore;
using Xunit;

public class CompletedHabitServiceTests
{
    private AppDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;

        return new AppDbContext(options);
    }

    [Fact]
    public async Task ToggleHabitAsync_AddsHabit_WhenNotCompleted()
    {

        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: "ToggleHabit_Create")
            .Options;

        using var context = new AppDbContext(options);

        var service = new CompletedHabitService(context);
        var today = DateOnly.FromDateTime(DateTime.UtcNow);

        await service.ToggleHabitAsync(userId: 1, habitId: 10,date: today);

        var exists = await context.CompletedHabits.AnyAsync();
        Assert.True(exists);
    }

    [Fact]
    public async Task ToggleHabitAsync_RemovesHabit_WhenAlreadyCompleted()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: "ToggleHabit_Removes")
            .Options;

        using var context = new AppDbContext(options);

        context.CompletedHabits.Add(new CompletedHabit
        {
            UserId = 1,
            HabitId = 99,
            CompletedDate = DateOnly.FromDateTime(DateTime.UtcNow)
        });
        await context.SaveChangesAsync();

        var service = new CompletedHabitService(context);

        await service.ToggleHabitAsync(
            userId: 1,
            habitId: 99,
            date: DateOnly.FromDateTime(DateTime.UtcNow)
        );

        var exists = await context.CompletedHabits.AnyAsync();
        Assert.False(exists);
    }
}