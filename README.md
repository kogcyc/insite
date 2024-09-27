# kassette

kassette is a methodology for generating a single web page by populating it with bits of content each of which is stored in a Markdown file

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
