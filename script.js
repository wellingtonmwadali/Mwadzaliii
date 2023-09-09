document.addEventListener("DOMContentLoaded", function() {
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const currentDay = currentDate.getDay();
        return daysOfWeek[currentDay];
    }

    function getCurrentUTCTime() {
        return new Date().getTime();
    }

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Time: ${getCurrentUTCTime()} ms`;
});
