# kassette #
a modular single-page HTML file
<br>
<br>
<br>
<strong>kassette</strong> aims to make single-page HTML modular:

- the 'modules' are Markdown files
- a JavaScript object named 'kassette' directs how the 'modules' are rendered

```
"Show me your code and I'll have no idea what it does. Show me your data and I will understand."
```

This is the core data of <strong>kassette</strong>, the contents of a file named 'kassette.js'

```javascript
export const kassette = [
    { path: 'one/1.md', className: 'one' },
    { path: 'two/2.md', className: 'two' },
    { path: 'three/3.md', className: 'three' }
];
```
That JS object is a map part of a <strong>kassette</strong> directory structure that looks like this:

```
root/
├── index.html
├── one/
│   └── 1.md
├── two/
│   └── 2.md
├── three/
│   └── 3.md
├── kassette.js
└── kassetteLoader.js
```


this is the contents of one/1.md:

```markdown
## Hello, world ##

This is the content.
```
it is converted to this:

```HTML
<div class="one">
    <h3>Hello, world</h3>
    <p>This is the content.</p>
</div>
```

```
root/
├── index.html
├── kassette.js
├── kassetteLoader.js
├── kassetteClasses.css
├── styles.css
├── one/
│   └── 1.md
├── two/
│   └── 2.md
├── three/
│   └── 3.md
├── favicon-32x32.png
└── apple-touch-icon.png
```
