const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    container.style.transition = "transform 0.6s ease-in-out";
});
loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    container.style.transition = "transform 0.6s ease-in-out";
});

// Form validation function
function validateForm() {
    // Add your validation logic here
    // For example, check if the email is valid
    return true; // Return false to prevent form submission if validation fails
}