/*Alex Annikie
    2208624
    Ms. Anuli
    Wed. 6pm
    October 31,2026*/

"use strict";

const attendeeData =
    localStorage.getItem("attendee");

if (!attendeeData) {

    window.location.href ="index.html";
}

const attendee =
    JSON.parse(attendeeData);

document.querySelector("#greeting")
.textContent =
`Congrats, ${attendee.fullName}!`;

document.querySelector("#ticketName")
.textContent =
attendee.fullName;

document.querySelector("#ticketNumber")
.textContent =
`#${Math.floor(
Math.random() * 90000
) + 10000}`;

document.querySelector("#ticketGithub")
.textContent =
attendee.github;

document.querySelector("#ticketGithub")
.href =
`https://github.com/${attendee.github.replace("@","")}`;

document.querySelector("#ticketAvatar")
.src =
attendee.avatar;