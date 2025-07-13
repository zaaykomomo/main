document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const body = document.body;

  fetch("config.json")
    .then(res => res.json())
    .then(config => {
      let savedTheme = localStorage.getItem("theme") || "light";
      applyTheme(savedTheme, config);
      toggle.checked = savedTheme === "dark";

      toggle.addEventListener("change", () => {
        let newTheme = toggle.checked ? "dark" : "light";
        applyTheme(newTheme, config);
        localStorage.setItem("theme", newTheme);
      });
    });

  function applyTheme(themeName, config) {
    let theme = config[themeName];

    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.textColor;
    document.querySelector("header").style.background = theme.headerBg;
    document.querySelectorAll(".btn").forEach(btn => {
      btn.style.background = theme.buttonBg;
      btn.style.color = theme.buttonText;
    });
    // add more elements if needed
  }
});
