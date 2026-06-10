# Yokama Heilpraktiker Website — Build Instructions

## Project Status: Initial Setup Complete ✅

This document describes how to build and run the Hugo website locally.

## Prerequisites

You need to have **Hugo** installed on your system.

### Install Hugo

**On macOS (Homebrew):**
```bash
brew install hugo
```

**On Linux (Debian/Ubuntu):**
```bash
sudo apt-get install hugo
```

**On Windows:**
Download from https://github.com/gohugoio/hugo/releases

Or use Chocolatey:
```bash
choco install hugo
```

**Verify installation:**
```bash
hugo version
```

## Project Structure

```
yokama-heilpraktiker/
├── content/              # Content files (German, English, French)
├── static/              # Static files (images, CSS, JS)
├── themes/yokama/       # Hugo theme
│   ├── layouts/         # HTML templates
│   ├── static/          # Theme CSS/JS
│   └── assets/
├── i18n/                # Translations (de, en, fr)
├── hugo.toml            # Hugo configuration
└── .gitignore           # Git ignore rules
```

## Running Locally

### Start the Hugo Dev Server

```bash
hugo server
```

The server will start at `http://localhost:1313`

### Live Reload

The server automatically reloads when you make changes to:
- Content files (`.md`)
- Templates (`.html`)
- CSS
- Configuration

Just save your changes and the browser will refresh automatically!

## Building for Production

To generate the static site for deployment:

```bash
hugo
```

This creates a `/public/` directory with all the compiled HTML, CSS, and JavaScript ready for deployment.

## Directory Overview

### Content
- **`content/_index.de.md`** — German homepage (contains all sections)
- **`content_en/_index.en.md`** — English homepage (to be created)
- **`content_fr/_index.fr.md`** — French homepage (to be created)

### Styling
- **`themes/yokama/static/css/style.css`** — All styles (colors, typography, responsive)

### JavaScript
- **`themes/yokama/static/js/main.js`** — Hamburger menu, smooth scrolling, animations

### Translations
- **`i18n/de.yaml`** — German strings
- **`i18n/en.yaml`** — English strings
- **`i18n/fr.yaml`** — French strings

### Images
- **`static/images/`** — Profile photos and images
- Currently: `gaby-portrait.webp`

## Configuration

Edit `hugo.toml` to:
- Change site URL (`baseURL`)
- Update contact email
- Update contact phone
- Set Calendly booking URL
- Add Google Analytics ID (post-launch)

## Next Steps

1. **Install Hugo** (if not already installed)
2. **Run** `hugo server`
3. **View** at `http://localhost:1313`
4. **Create English content** (copy German homepage and translate)
5. **Create French content** (copy German homepage and translate)
6. **Add more images** to `/static/images/`
7. **Test** on mobile, tablet, desktop
8. **Deploy to Netlify**

## Deployment to Netlify

Once ready:

1. Push to GitHub: `git push origin main`
2. Connect GitHub repo to Netlify
3. Set build command: `hugo`
4. Set publish directory: `public`
5. Deploy!

## Tips

- Use `{{ i18n "key" }}` in templates to access translated strings
- Images in `/static/images/` are served at `/images/filename`
- All colors are in `:root` variables in `style.css` — easy to customize
- The site is fully responsive (mobile-first design)

## Troubleshooting

**"Hugo command not found":**
- Hugo is not installed. See "Install Hugo" section above.

**"Error in content file":**
- Check YAML front matter syntax in `.md` files
- Use proper indentation (2 spaces, not tabs)

**"Images not showing":**
- Check image path is in `/static/images/`
- Use `/images/filename` in markdown

**"Styles not updating":**
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Restart Hugo server: `Ctrl+C` and `hugo server` again

---

Ready to build! 🚀

Next: Run `hugo server` and visit `http://localhost:1313`
