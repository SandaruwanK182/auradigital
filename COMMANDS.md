# Command Reference Guide

Quick lookup for all common commands and tasks.

---

## 🚀 Development Commands

### Start Development Server
```bash
npm run dev
```
- Auto-opens at http://localhost:5173
- Hot reload enabled
- Access from mobile: http://{YOUR_IP}:5173

### Build for Production
```bash
npm run build
```
- Outputs to `dist/` folder
- Minified and optimized
- Takes ~3 seconds
- No errors = ready to deploy

### Preview Production Build
```bash
npm run preview
```
- View production build locally
- Runs on http://localhost:4173
- Test before deploying

### Linting/Type Check
```bash
npm run lint
```
- Checks TypeScript errors
- Shows unused imports
- Run before committing

---

## 📦 Dependency Management

### Install All Dependencies
```bash
npm install
```
- Run after cloning
- Run after switching branches
- Use when package.json changes

### Update Packages
```bash
npm update
```
- Updates to latest compatible versions
- Use monthly for security
- Check for breaking changes

### Check for Vulnerabilities
```bash
npm audit
```
- Shows security issues
- `npm audit fix` to auto-fix
- `npm audit fix --force` for breaking changes

### Install Specific Package
```bash
npm install package-name
```
Example:
```bash
npm install lucide-react
```

---

## 🔍 Finding & Replacing

### Find Text (VS Code)
- Press `Ctrl+F` - Find
- Press `Ctrl+H` - Find & Replace

**Example: Update phone number globally**
1. Press `Ctrl+H`
2. Find: `94723146364`
3. Replace with: `YOUR_NUMBER`
4. Click "Replace All"

### Search in Terminal
```bash
# On Windows, search for phone number in all files
findstr /R "94723146364" src\*.tsx

# On Mac/Linux
grep -r "94723146364" src/
```

---

## 📁 File & Folder Operations

### Create New File
```bash
# Option 1: VS Code
Right-click folder → New File

# Option 2: Terminal
echo. > src/pages/NewPage.tsx
```

### Delete File
```bash
# Option 1: VS Code
Right-click file → Delete

# Option 2: Terminal (Windows)
del src/pages/OldPage.tsx

# Terminal (Mac/Linux)
rm src/pages/OldPage.tsx
```

### Copy File
```bash
# Windows
copy src/pages/Home.tsx src/pages/Home-backup.tsx

# Mac/Linux
cp src/pages/Home.tsx src/pages/Home-backup.tsx
```

---

## 🎨 CSS & Styling

### Add Custom CSS Class
Edit `src/index.css`:
```css
.my-custom-class {
  @apply px-4 py-2 rounded-lg font-bold;
}
```

Use in component:
```tsx
<div className="my-custom-class">
  Content here
</div>
```

### Add Tailwind Color
Edit `tailwind.config.js`:
```javascript
colors: {
  mycolor: {
    50: '#f9fafb',
    100: '#f3f4f6',
    // ...
    900: '#111827',
  }
}
```

Use:
```tsx
<div className="bg-mycolor-500 text-mycolor-900">
  Colored text
</div>
```

---

## 🔧 Configuration Changes

### Change Site URL
Edit `src/components/SEO.tsx`:
```typescript
const SITE_URL = 'https://yourdomain.com'
```

### Change Business Name
Edit `src/components/SEO.tsx`:
```typescript
const BUSINESS_NAME = 'Your Company Name'
```

### Change Color Scheme
Edit `tailwind.config.js`:
```javascript
backgroundImage: {
  'gradient-primary': 'linear-gradient(135deg, #newcolor1, #newcolor2)',
}
```

### Change Phone Number (Global)
1. Press `Ctrl+H` in VS Code
2. Find: `94723146364`
3. Replace with: `YOUR_NUMBER`
4. Replace All

---

## 📄 Product Management

### Add New Product
1. Edit `src/pages/Products.tsx`
2. Add to `ALL_PRODUCTS` array:
```typescript
{
  id: 'new-id',
  name: 'Product Name',
  price: '₹XXX / LKR XXX / $XX',
  description: 'Short description',
  features: ['Feature 1', 'Feature 2'],
  image: 'https://unsplash.com/...',
  category: 'Category Name',
  highlighted: false,
}
```

### Update Product Price
Find the product in `src/pages/Products.tsx`, update `price` field.

### Change Product Category
Edit `category` field in the product object.

### Add Product to Featured
Set `highlighted: true` in the product object.

---

## 🌍 Internationalization (hreflang)

### Add New Country
Edit `src/components/SEO.tsx` → `HREFLANG_CONFIG`:
```typescript
{ lang: 'en-country', hrefLang: 'https://yourdomain.com/en-country/' }
```

Example for Australia:
```typescript
{ lang: 'en-au', hrefLang: 'https://yourdomain.com/en-au/' }
```

---

## 🚀 Git Commands

### Initialize Git Repository
```bash
git init
```

### Add Files to Staging
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Your meaningful message"
```

### Push to GitHub
```bash
git push origin main
```

### View Commit History
```bash
git log --oneline
```

### Revert to Previous Commit
```bash
git revert <commit-hash>
git push origin main
```

---

## 🌐 Deployment Commands

### Deploy to Netlify (CLI)
```bash
npm run build
netlify deploy --prod
```

### Deploy to Vercel (CLI)
```bash
npm run build
vercel --prod
```

### Create Sitemap (Manual)
```bash
npm install --save-dev sitemap
```

---

## 🐛 Debugging

### Clear Cache
```bash
# Clear npm cache
npm cache clean --force

# Clear dist folder
rm -r dist

# Clear node_modules
rm -r node_modules
```

### Full Rebuild
```bash
npm cache clean --force
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### Check Port Usage
```bash
# Windows
netstat -ano | findstr :5173

# Mac/Linux
lsof -i :5173
```

### Kill Process on Port
```bash
# Windows
taskkill /PID <PID> /F

# Mac/Linux
kill -9 <PID>
```

---

## 📊 Analytics & Monitoring

### Check Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Login with Google
3. Add property (your domain)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Check Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Login with Google
3. Create new property
4. Get Measurement ID
5. Add to `index.html`

### Monitor Performance
1. Go to [pagespeed.web.dev](https://pagespeed.web.dev)
2. Enter your domain
3. Check scores (target 90+)
4. Apply suggestions

---

## 🔐 Security Commands

### Check for Vulnerabilities
```bash
npm audit
```

### Fix Vulnerabilities
```bash
npm audit fix
```

### Force Fix (May break things)
```bash
npm audit fix --force
```

---

## 📝 File Editing Tips

### Quick Open File (VS Code)
```
Ctrl + P
Type filename
Press Enter
```

### Go to Line (VS Code)
```
Ctrl + G
Type line number
Press Enter
```

### Find All Occurrences (VS Code)
```
Ctrl + Shift + L
Type to replace all
Press Escape
```

---

## 🔄 Branch Management (Git)

### Create New Branch
```bash
git checkout -b feature/new-feature
```

### Switch Branches
```bash
git checkout main
```

### Merge Branch
```bash
git checkout main
git merge feature/new-feature
```

### Delete Branch
```bash
git branch -d feature/new-feature
```

---

## 🎯 Common Task Workflows

### Add a New Page Workflow
```bash
# 1. Create page component
#    src/pages/Features.tsx

# 2. Add route to App.tsx
import Features from './pages/Features'
// In Routes:
<Route path="/features" element={<Features />} />

# 3. Add navigation link to Navbar
// Add to menu items

# 4. Test locally
npm run dev

# 5. Build & deploy
npm run build
```

### Update Product Workflow
```bash
# 1. Edit src/pages/Products.tsx
# 2. Update product object or ALL_PRODUCTS array
# 3. Test locally (npm run dev)
# 4. Verify purchase modal works
# 5. Build (npm run build)
# 6. Deploy
```

### Change Design Workflow
```bash
# 1. Edit tailwind.config.js (colors, fonts)
# 2. Edit src/index.css (custom utilities)
# 3. Test locally (npm run dev)
# 4. Check on mobile
# 5. Build & deploy
```

---

## 📞 Getting Help

### Check Documentation
- [README.md](./README.md) - Full reference
- [SETUP.md](./SETUP.md) - Setup guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment
- [SEO-CHECKLIST.md](./SEO-CHECKLIST.md) - SEO

### Google the Error
```
1. Copy entire error message
2. Google: "[framework] [error message]"
3. Check Stack Overflow
4. Check official docs
```

### Check Logs
```bash
# See full build output
npm run build 2>&1 | more

# See dev server errors
npm run dev
# Check terminal output
```

---

## ⏱️ Time Estimates

- Install dependencies: 1-2 minutes
- Start dev server: 10 seconds
- Make simple change: 2-5 minutes
- Build: 3-5 seconds
- Deploy: 1-3 minutes
- DNS propagation: 24-48 hours

---

## 🎓 Useful Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 💾 Quick Reference Snippets

### Import Component
```typescript
import MyComponent from './components/MyComponent'
```

### Use State Hook
```typescript
const [count, setCount] = useState(0)
```

### Use Effect Hook
```typescript
useEffect(() => {
  // Do something
}, [dependencies])
```

### Conditional Rendering
```typescript
{condition && <Component />}
{condition ? <A /> : <B />}
```

### Map Over Array
```typescript
{array.map((item) => (
  <div key={item.id}>{item.name}</div>
))}
```

---

**Bookmark this page for quick reference!** 📖
