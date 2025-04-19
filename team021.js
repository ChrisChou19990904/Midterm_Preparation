let interval;
const timerDisplay = document.getElementById("timer");
const targetInput = document.getElementById("targetTime");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTimer() {
    const now = new Date();
    const target = new Date(targetInput.value);

    let diff = Math.floor((target - now) / 1000); // 差幾秒

    if (diff <= 0) {
        clearInterval(interval);
        timerDisplay.textContent = "00:00:00";
        return;
    }

    const hours = String(Math.floor(diff / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
    const seconds = String(diff % 60).padStart(2, '0');

    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

startBtn.addEventListener("click", () => {
    clearInterval(interval); // 確保不會重複計時
    updateTimer(); // 立即執行一次
    interval = setInterval(updateTimer, 1000); // 每秒更新
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    timerDisplay.textContent = "00:00:00";
    targetInput.value = "";
});
