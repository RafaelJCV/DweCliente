// Selecting the buttons from the DOM
const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

/**
 * Applies a theme to the page.
 * @param {String} theme
 */
function applyTheme(theme) {
  if (theme === "dark"){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  else if (theme === "light"){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}

/**
 * Gets the value of a cookie by its name.
 * @param {String} name - The cookie name.
 * @returns {String|null} - The cookie value, or null if it is not found.
 */
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for(const cookie of cookies){
    if (cookie.split("=")[0] === name)
      return cookie.split("=")[1];
  };
}

/**
 * Sets the value of a cookie.
 * @param {String} name - The cookie name.
 * @param {String} value - The cookie value.
 */
darkBtn.addEventListener("click", () => {
  document.cookie = "theme=dark;";
  applyTheme("dark");
});

/**
 * Sets the value of a cookie.
 * @param {String} name - The cookie name.
 * @param {String} value - The cookie value.
 */
lightBtn.addEventListener("click", () => {
  document.cookie = "theme=light;";
  applyTheme("light");
});

// Check if a theme is saved in the cookies and apply it. First time.
const savedTheme = getCookie("theme");

if (savedTheme !== null) {
  applyTheme(savedTheme);
}
