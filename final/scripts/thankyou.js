const params = new URLSearchParams(window.location.search);

const rawTimestamp = params.get("timestamp");
let formattedTimestamp = "N/A";

if (rawTimestamp) {
    const date = new Date(rawTimestamp);
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/Guayaquil"
    };
    formattedTimestamp = date.toLocaleString("en-US", options);
}

document.getElementById("firstName").textContent = params.get("firstName") || "N/A";
document.getElementById("lastName").textContent = params.get("lastName") || "N/A";
document.getElementById("email").textContent = params.get("email") || "N/A";
document.getElementById("phone").textContent = params.get("phone") || "N/A";
document.getElementById("mission").textContent = params.get("mission") || "N/A";
document.getElementById("timestamp").textContent = formattedTimestamp;
