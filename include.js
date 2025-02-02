//This JS file is loaded on every Kindliing page
document.head.insertAdjacentHTML("beforeend", `
<link rel="stylesheet" href="/Kindliing/style.css">
<link rel="icon" type="image/svg" href="/Kindliing/logo.png"/>`);
document.body.insertAdjacentHTML("beforeend", `
<footer>
<p id="copyright">Loading footer...</p>
<a href="https://github.com/Kindliing/Kindliing/">
<img id="github" src="/img/github.svg" alt="GitHub Logo">
</a></footer>`);
const year = (new Date).getFullYear();
if (year == 2025) {
    document.getElementById("copyright").textContent = "© 2025 Kindliing authors and contributors.";
} else {
    document.getElementById("copyright").textContent = "© 2025-" + year + " Kindliing authors and contributors.";
}