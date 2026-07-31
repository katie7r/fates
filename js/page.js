"use strict";

$(document).ready(function () {
  var $themeToggle = $("input[role='switch'][name='theme']");
  var initialTheme = localStorage.getItem("fates-theme");

  if (initialTheme == "dark") $themeToggle.prop("checked", true);
  if (initialTheme) setTheme(initialTheme);

  $themeToggle.change((e) => {
    var theme = e.target.checked ? "dark" : "light";

    // Change theme
    setTheme(theme);

    // Save to local storage to remember latest preference if possible
    localStorage.setItem("fates-theme", theme);
  });
});

function setTheme(theme) {
  // TODO: smoother transition?
  $("html").attr("data-theme", theme);
};
