# kassette #
a modular single-page HTML file
<br>
<br>
<br>
<strong>kassette</strong> aims to make single-page HTML modular:

- the 'modules' are Markdown files
- a JavaScript object named 'kassette' directs how the 'modules' are rendered

```
"Good programmers worry about data structures."

    - Linux Torvalds
```

Here is the <em>data stucture</em> of kassette, a file named 'kassette.js'

```javascript
export const kassette = [
    { path: 'one/1.md', className: 'one' },
    { path: 'two/2.md', className: 'two' },
    { path: 'three/3.md', className: 'three' }
];
```

The JavaScript object serves as a map that defines the structure of the <strong>kassette</strong> directory, which is organized as follows:

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
