# Modern MiniFlux Theme

A Miniflux theme in the Feedbin look with light and dark color schemes. The single-column layout is preserved; articles get a typographically optimized reading view and a floating action bar.

## Installation

1. Log in to Miniflux and open **Settings → Preferences**.
2. Copy the entire contents of [`theme.css`](theme.css) into the **Custom CSS** field.
3. Optionally, copy the entire contents of [`theme.js`](theme.js) into the **Custom JS** field. The JavaScript removes redundant pagination and certain hidden elements from the page; the theme also works without this script.
4. Save the changes and reload Miniflux.

The theme follows the browser's system setting for light and dark mode (`prefers-color-scheme`). It uses modern CSS features such as `:has()` and `color-mix()`; a current browser is recommended. Appearance and selectors may vary depending on the Miniflux version.

## Notes

- Categories without unread entries, article attachments, tags, and article navigation are hidden. Some actions are only visible as icons.
- The optional JavaScript removes, among other things, categories without unread entries from the DOM. To undo this, remove the script from the settings and reload the page.
- The theme overrides many Miniflux styles. If you see display problems, check whether your own CSS or browser extensions conflict with it.
- To uninstall, remove the inserted CSS and, if applicable, JavaScript code from the settings, save, and reload the page.

## Files

- [`theme.css`](theme.css) – stylesheet to insert into Miniflux
- [`theme.js`](theme.js) – optional JavaScript to insert into Miniflux
