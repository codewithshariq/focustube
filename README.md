<p align="center">
  <img src="icons/icon128.png" width="96" height="96" alt="FocusTube icon">
</p>

<h1 align="center">FocusTube</h1>

<p align="center">
  A lightweight Chrome extension that hides YouTube Shorts so you can stay focused while you work.
</p>

---

## Features

- **Homepage** – hides the Shorts shelf and any Shorts in the video grid.
- **Side menu** – hides the Shorts button in both the expanded and collapsed side menu.
- **Search results** – hides the Shorts shelf, individual Shorts in the results, and the "Shorts" filter chip.
- **Per-area toggles** – turn hiding on or off separately for each area from the toolbar popup.
- **Instant changes** – toggles apply to open YouTube tabs right away, no page reload needed.
- **Remembers your choices** – settings are saved with Chrome sync storage.
- **Light and dark mode** – the popup follows your system theme.
- **Private by design** – no tracking, no data collection, no network requests.

## Installation

FocusTube isn't on the Chrome Web Store, so you install it as an *unpacked* extension. It takes about a minute.

1. **Download the code**
   - Click the green **Code** button on this page, then **Download ZIP**, and unzip it.
   - Or clone it:
     ```bash
     git clone https://github.com/<your-username>/focustube.git
     ```
2. Open Chrome and go to `chrome://extensions`.
3. Turn on **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder that contains `manifest.json`.
5. *(Optional)* Click the puzzle-piece icon in the toolbar and pin **FocusTube** so its button is always visible.

That's it. Open or refresh YouTube and Shorts will be gone.

> **Keep the folder where it is.** Chrome loads the extension from that folder, so moving or deleting it will break the extension.

It also works in other Chromium-based browsers such as Microsoft Edge and Brave, using the same steps on their extensions page (`edge://extensions`, `brave://extensions`).

## Usage

Click the **FocusTube** icon in the toolbar to open the popup:

| Toggle | What it hides |
| --- | --- |
| **Homepage** | Shorts shelf and Shorts videos on the YouTube homepage |
| **Side menu** | The Shorts navigation button |
| **Search results** | Shorts shelf, Shorts videos and the "Shorts" filter chip |

A switch that's **on** means Shorts are **hidden** in that area. All three are on by default.

## Updating

1. Pull the latest changes (`git pull`) or download the ZIP again and replace the old files.
2. Go to `chrome://extensions` and click the **reload** icon on the FocusTube card.
3. Refresh any open YouTube tabs.

## Permissions and privacy

FocusTube asks for one permission:

- **`storage`** – to save your toggle settings.

It only runs on `https://www.youtube.com/*`. It doesn't collect, store or send any personal data, and it makes no network requests of its own.

## How it works

- `hide-shorts.css` contains the rules that hide each Shorts element. Each group of rules only applies when its toggle is on.
- `content.js` reads your settings and switches those rule groups on or off. It also finds the "Shorts" filter chip in search results by its label, since that chip can't be targeted with CSS alone.
- `popup.html` and `popup.js` provide the toggle popup and save your choices.

Because hiding is done mostly with CSS loaded at the start of the page, Shorts are usually hidden before they appear on screen.

## Project structure

```
focustube/
├── manifest.json      # Extension manifest (Manifest V3)
├── hide-shorts.css    # Rules that hide Shorts elements
├── content.js         # Applies settings and tags the Shorts filter chip
├── popup.html         # Toggle popup UI
├── popup.js           # Saves and loads toggle settings
├── LICENSE            # MIT License
└── icons/
    ├── icon.svg       # Icon source
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

## Known limitations

- **YouTube layout changes** – YouTube changes its page structure from time to time. If Shorts start showing up again, the selectors in `hide-shorts.css` may need updating. Issues and pull requests are welcome.
- **Language** – the search filter chip is detected by the English label "Shorts", so it may not be hidden if YouTube is set to another language. Everything else works in any language.
- **Other pages** – FocusTube targets the homepage, side menu and search results. Shorts on channel pages and in watch-page recommendations aren't specifically handled yet.

## Contributing

Found Shorts that slipped through? Open an issue with the page URL and, if you can, the element's tag name (right-click it and choose **Inspect**). Pull requests are welcome too.

## License

Released under the [MIT License](LICENSE). You're free to use, copy, modify and share it.

## Disclaimer

FocusTube is an independent project and is not affiliated with, endorsed by, or sponsored by YouTube or Google. YouTube is a trademark of Google LLC.
