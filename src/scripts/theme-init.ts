// Self-invoking function to encapsulate the logic and avoid polluting
// the global scope.
(() => {
  // This script is designed to be inlined in the `<head>` for instant theme
  // application.
  //
  // It prevents a flash of unstyled content or flash of incorrect theme.

  // Define a type for the theme.
  type Theme = 'dark' | 'light';

  /**
   * Retrieves the user's theme preference.
   * Priority:
   * 1. Value from localStorage (if previously set by the user).
   * 2. OS/browser preference (`prefers-color-scheme`).
   * Defaults to 'light' if no system preference is matched.
   * @returns {Theme} The theme preference, either 'dark' or 'light'.
   */
  const getThemePreference = (): Theme => {
    // Return 'dark' or 'light' from local storage.
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      const theme: string | null = localStorage.getItem('theme');
      if (theme === 'dark' || theme === 'light') {
        return theme;
      }
    }
    // If no preference in local storage, check OS/browser setting.
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Determine if the theme should be dark based on preference.
  const isDark: boolean = getThemePreference() === 'dark';

  // Apply the `theme-dark` class to the `<html>` element.
  // If `isDark` is true, `theme-dark` is added.
  // If `isDark` is false, `theme-dark` is removed.
  document.documentElement.classList[isDark ? 'add' : 'remove']('theme-dark');

  // Handles persisting the theme if it's changed by other means
  // (e.g., a user clicks a theme toggle button that modifies the
  // class on `<html`).
  // It only runs if localStorage is available.
  if (typeof localStorage !== 'undefined') {
    // Create a MutationObserver to watch for changes to the class attribute
    // of the `<html>` element. This allows for script to detect if another
    // part of the application changes the theme.
    const observer = new MutationObserver(() => {
      const currentIsDark: boolean = document.documentElement.classList.contains('theme-dark');
      const newTheme: Theme = currentIsDark ? 'dark' : 'light';
      // Update localStorage with the new theme state.
      localStorage.setItem('theme', newTheme);
    });

    // Configure and start the observer.
    // It will watch for any changes to the `class` attribute
    // of `document.documentElement`.
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
})();