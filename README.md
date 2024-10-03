# kassette #
a modular single-page HTML file
<br>
<br>
<br>

### O V E R V I E W ###

<strong>kassette</strong> aims to make single-page HTML modular:

- the 'modules' are Markdown files
- a JavaScript object named 'kassette' directs how the 'modules' are rendered

```
"Good programmers worry about data structures."

    - Linux Torvalds
```

Here is the <em>data stucture</em> of <strong>kassette</strong>, a file named 'kassette.js'

```json
[
    { "dir": "one", "fn": "1.md", "classes": "" },
    { "dir": "two", "fn": "2.md", "classes": "zoom" }
]
```

The 'kassette' object serves as a map that defines the structure of the <strong>kassette</strong> directory, which is organized as follows:

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

### I N S T A L L  / C O N F I G  ###

The outline for installing and using <strong>kassette</strong> is to make a directory that looks something like the one shown above:

- NOTE: if you try to run this locally, you will see a CORS error, so serve it from a local HTTP server (python3 -m http.server)
- copy the kassetteLoader.js file from this repository
- copy the kassette.js file from this repository (or make your own)
- make an index.html page like this:

```
<!doctype html>
<html lang="en">
  
  <head>
    
    <!-- Usual stuff -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>kassette</title>

    <!-- Import Showdown.js for Markdown to HTML conversion -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js"></script

    <!-- Import kassetteLoader.js as a module -->
    <script type="module" src="kassetteLoader.js"></script>
    
  </head>

  <body>

    <!-- Content section where the rendered markdown will be inserted -->
    <div id="content"></div>
    
  </body>

</html>
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
