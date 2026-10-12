const fs = require('fs');
const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variable (set them in Vercel > Settings > Environment Variables).');
  process.exit(1);
}
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('YOUR_SUPABASE_URL', () => url).replace('YOUR_SUPABASE_ANON_KEY', () => key);
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('Built dist/index.html');
