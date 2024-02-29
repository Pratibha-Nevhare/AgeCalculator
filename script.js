// script.js
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("birthdate");
    const pElement = document.getElementById("age");

    dateInput.addEventListener("change", () => {
        const birthDate = new Date(dateInput.value);
        const currentDate = new Date();
        const newDate = new Date(currentDate - birthDate);

        const years = newDate.getUTCFullYear() - 1970;
        const months = newDate.getUTCMonth();
        const days = newDate.getUTCDate();

        pElement.innerText = `You're ${years} years ${months} months ${days} days old.`;
    });
});
