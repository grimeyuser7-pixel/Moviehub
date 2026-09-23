# MovieHub — Final Polished iPhone PWA

This is a standalone Progressive Web App. It is designed for videos you are legally authorized to watch/download.

## iPhone setup
1. Put these files in the root of a GitHub repository: index.html, manifest.json, sw.js, and the icons folder.
2. GitHub: Settings → Pages → Deploy from a branch → main → /(root) → Save.
3. Open the published HTTPS address in Safari.
4. Tap Share → Add to Home Screen → Add.

## Offline downloads
MovieHub saves downloaded video files in IndexedDB on the device. A source must:
- be authorized for you to download;
- be reachable by the browser; and
- permit browser cross-origin downloads (CORS) when hosted on another domain.

The app does not bypass DRM, paywalls, subscriptions, or access controls.

## Demo catalog
The sample titles use open/demo video sources. Replace/add entries in index.html with sources you are authorized to use.

## Important
Browser/PWA storage is not ideal for very large movie libraries. A native iOS app can provide more robust large-file downloads, but would require an iOS build/distribution workflow.
