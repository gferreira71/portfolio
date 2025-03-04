import { ref } from "vue";

const THEME_KEY = "theme";
const theme = ref(localStorage.getItem(THEME_KEY) || "light");

const setTheme = (newTheme: string) => {
  document.body.classList.toggle("dark-theme", newTheme === "dark");
  localStorage.setItem(THEME_KEY, newTheme);
  theme.value = newTheme;
};

export default {
  theme,
  getTheme: () => theme.value,
  toggleTheme: () => {
    setTheme(theme.value === "light" ? "dark" : "light");
    return theme.value;
  },
  initializeTheme: () => setTheme(theme.value),
};
