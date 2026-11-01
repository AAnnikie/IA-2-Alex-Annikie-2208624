/*Alex Annikie
    2208624
    Ms. Anuli
    Wed. 6pm
    October 31,2026*/

const form = document.querySelector("#registrationForm");

form.addEventListener("submit", (event) => {
    console.log("Form submitted");
    event.preventDefault();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    const fullName =
        document.querySelector("#fullName").value.trim();

    const email =
        document.querySelector("#email").value.trim();

    const github =
        document.querySelector("#github").value.trim();

    const avatar =
        document.querySelector("#avatar").files[0];

    let isValid = true;

    if (fullName === "") {
        showError("nameError",
            "Full name is required.");
        isValid = false;
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        showError(
            "emailError",
            "Enter a valid email."
        );
        isValid = false;
    }

    if (!github.startsWith("@")) {
        showError(
            "githubError",
            "GitHub username must begin with @"
        );
        isValid = false;
    }

    if (!avatar) {
        showError(
            "avatarError",
            "Upload an image."
        );
        isValid = false;
    } else {

        const validTypes =
            ["image/jpeg", "image/png"];

        if (!validTypes.includes(avatar.type)) {
            showError(
                "avatarError",
                "Only JPG and PNG allowed."
            );
            isValid = false;
        }

        if (avatar.size > 500000) {
            showError(
                "avatarError",
                "Image must be below 500KB."
            );
            isValid = false;
        }
    }

    if (!isValid) {
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {

        const attendee = {
            fullName,
            email,
            github,
            avatar: reader.result
        };

        localStorage.setItem(
            "attendee",
            JSON.stringify(attendee)
        );

        window.location.href =
            "ticket.html";
    };

    reader.readAsDataURL(avatar);
});

function showError(id, message) {
    document.querySelector(`#${id}`)
        .textContent = message;
}

function clearErrors() {

    document
        .querySelectorAll(".error")
        .forEach(error => {
            error.textContent = "";
        });
}