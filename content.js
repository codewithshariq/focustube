// Applies the popup toggles to the page and tags the "Shorts" filter chip,
// which can't be targeted with CSS alone because only its text identifies it.

const DEFAULTS = { home: true, sidebar: true, search: true };
const ATTRS = {
  home: "data-hys-home",
  sidebar: "data-hys-sidebar",
  search: "data-hys-search",
};

function applySettings(settings) {
  const root = document.documentElement;
  for (const key of Object.keys(ATTRS)) {
    if (settings[key]) root.setAttribute(ATTRS[key], "");
    else root.removeAttribute(ATTRS[key]);
  }
}

// Start with everything hidden to avoid a flash, then apply saved settings.
applySettings(DEFAULTS);
chrome.storage.sync.get(DEFAULTS, applySettings);

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "sync") return;
  chrome.storage.sync.get(DEFAULTS, applySettings);
});

// Tag the chip whose label is "Shorts" (English UI).
function tagShortsChips() {
  document.querySelectorAll("yt-chip-cloud-chip-renderer").forEach((chip) => {
    const isShorts = chip.textContent.trim() === "Shorts";
    if (isShorts) chip.setAttribute("data-hys-shorts-chip", "");
    else chip.removeAttribute("data-hys-shorts-chip");
  });
}

let scheduled = false;
function scheduleTag() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    tagShortsChips();
  });
}

new MutationObserver(scheduleTag).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
document.addEventListener("yt-navigate-finish", scheduleTag);
scheduleTag();
