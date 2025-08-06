// Output the current year for the copyright
document.getElementById("current-year").textContent = `${new Date().getFullYear()}`;

// Output the last modified date of the document
document.getElementById("lastModified").textContent = `${document.lastModified}`;

document.addEventListener('DOMContentLoaded', function() {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
      timestampField.value = new Date().toISOString();
    }
});