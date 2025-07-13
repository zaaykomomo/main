document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const body = document.body;

  // Load config.json first
  fetch("config.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.theme === "dark") {
        body.classList.add("dark-mode");
        toggle.checked = true;
      } else {
        body.classList.remove("dark-mode");
        toggle.checked = false;
      }
    })
    .catch((err) => {
      console.error("Could not fetch config.json:", err);
    });

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  });
});
