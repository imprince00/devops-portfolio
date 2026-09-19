// DARK / LIGHT MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// LOAD SAVED THEME

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";
}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;


    const response = {

        name: name,

        email: email,

        message: message,

        date: new Date().toLocaleString()

    };


    let responses =
        JSON.parse(localStorage.getItem("contactResponses")) || [];


    responses.push(response);


    localStorage.setItem(
        "contactResponses",
        JSON.stringify(responses)
    );


    alert("Thank you! Your message has been submitted.");


    contactForm.reset();

});