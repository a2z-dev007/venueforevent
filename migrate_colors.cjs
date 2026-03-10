const fs = require('fs');
const path = require('path');

const componentsDir = 'src/components';
const globalsCssPath = 'src/app/globals.css';

function getFiles(dirPath) {
  let results = [];
  const list = fs.readdirSync(dirPath);
  list.forEach(file => {
    file = path.join(dirPath, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(getFiles(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles(componentsDir);

const colorMap = new Map();
let variantCounters = {
  wine: 1,
  champagne: 1,
  blush: 1,
  sage: 1,
  marigold: 1,
  peach: 1,
  dark: 1,
  gold: 1,
  other: 1
};

function getSemanticPrefix(h, s, l) {
  h = parseFloat(h);
  l = parseFloat(l);
  
  if (l < 20) return 'dark';
  
  if (h >= 330 || h <= 5) return 'wine';
  if (h >= 10 && h <= 20) return 'blush';
  if (h >= 20 && h <= 28) return 'peach';
  if (h > 28 && h <= 34) return 'champagne';
  if (h > 34 && h <= 45) return 'gold';
  if (h >= 100 && h <= 140) return 'sage';
  
  return 'other';
}

// 1. Gather distinct colors and generate names
const regex = /hsl\(\s*([\d.]+)\s+([\d.]+)%\s+([\d.]+)%(?:\s*\/\s*([\d.]+))?\s*\)/g;
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const key = `${match[1]} ${match[2]}% ${match[3]}%`;
    if (!colorMap.has(key)) {
      const prefix = getSemanticPrefix(match[1], match[2], match[3]);
      const name = `--${prefix}-${variantCounters[prefix]++}`;
      colorMap.set(key, name);
    }
  }
});

// 2. Inject CSS variables into globals.css
let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
let rootVars = `\n    /* Dynamically Configured Variations */\n`;
for (const [key, name] of colorMap.entries()) {
  rootVars += `    ${name}: ${key};\n`;
}

// Add our variables directly to the :root block inside globals.css
globalsCss = globalsCss.replace(
  /(:root\s*{[\s\S]*?)(\s*})/m,
  (match, p1, p2) => `${p1}${rootVars}${p2}`
);
fs.writeFileSync(globalsCssPath, globalsCss);

// 3. Rewrite .tsx files
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Custom replacer for the regex
  content = content.replace(regex, (match, h, s, l, a) => {
    changed = true;
    const key = `${h} ${s}% ${l}%`;
    const varName = colorMap.get(key);
    if (a) {
      return `hsl(var(${varName}) / ${a})`;
    } else {
      return `hsl(var(${varName}))`;
    }
  });
  
  if (changed) {
    fs.writeFileSync(file, content);
  }
});

console.log('Successfully updated CSS files and Next.js components to use centralized CSS variables!');
