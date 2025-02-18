document.addEventListener("DOMContentLoaded", function() {
    const sensors = document.querySelectorAll(".sensor-card");

    sensors.forEach(sensor => {
        sensor.addEventListener("click", () => {
            alert(`You clicked on ${sensor.querySelector("h3").textContent}`);
        });
    });
});
