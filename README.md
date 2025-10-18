# hng-stage-zero-assignment

```markdown
# Profile Card — Stage 0 (Frontend Wizards)

This is a minimal, accessible, and responsive Profile Card built with plain HTML, CSS, and vanilla JavaScript for Stage 0. It includes test-friendly attributes required by the assessment.

Features
- Semantic HTML (article, header, figure, nav, section, h2, ul/li).
- All required data-testid attributes present:
  - test-profile-card
  - test-user-name
  - test-user-bio
  - test-user-time
  - test-user-avatar
  - test-user-social-links (container) and per-link ids:
    - test-user-social-twitter
    - test-user-social-github
    - test-user-social-linkedin
  - test-user-hobbies
  - test-user-dislikes
- Avatar can be set by URL or uploaded from local device.
- Current time updates in milliseconds (Date.now()).
- Responsive layout with visible keyboard focus styles.

How to run locally
1. Clone the repository:
   - git clone https://github.com/Catalyst30/hng-stage-zero-assignment.git
2. Add the profile card files (index.html, styles.css, app.js, README.md) into a folder, e.g., `stage-0/profile-card` or at the repo root.
3. Serve the files with a simple server or open `index.html` directly:
   - Python 3: `python -m http.server 8000` (open http://localhost:8000)
   - Or simply open the local `index.html` file in a browser.

How to host (GitHub Pages)
1. Commit and push to the `main` branch (or `gh-pages` if you prefer).
2. In the repo settings → Pages, set the source to `main` branch and the root folder (or /docs if you put files there).
3. After GitHub Pages builds, the site will be available at:
   - https://Catalyst30.github.io/hng-stage-zero-assignment/

Notes for automated tests / acceptance
- The element with data-testid="test-user-time" prints Date.now() in ms and updates every 500ms.
- Social links open in a new tab and include rel="noopener noreferrer".
- All visible elements required by the task include the exact data-testid values for stable targeting.

submiaaion of hng assignment stage 0

```
