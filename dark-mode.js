document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const body = document.body;

  // Check localStorage first
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      toggle.checked = true;
    } else {
      body.classList.remove("dark-mode");
      toggle.checked = false;
    }
  } else {
    // If nothing in localStorage, load config.json
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
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});
