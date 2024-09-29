# kassette #
a modular single-page HTML file
<br>
<br>
<br>
<strong>kassette</strong> is an attempt at making single-page HTML modular.
What does 'modular' mean:

- the 'modules' are Markdown files
- there is Javascript that renders the Markdown file into HTML
- there is also a Javascript 'object' named 'kassette' that controls that rendering process


the file named 'kassette.js' looks like this

```javascript
export const kassette = [
    { path: 'one/1.md', className: 'one' },
    { path: 'two/2.md', className: 'two' },
    { path: 'three/3.md', className: 'three' }
];
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
