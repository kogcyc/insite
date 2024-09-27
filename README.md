# KassetteLoader Module Explanation

The **kassetteLoader.js** module is responsible for loading Markdown content dynamically into the web page. It works in conjunction with the **Kassette** object, which defines the paths and styling for each Markdown file. Below is an explanation of how it operates.

## Key Functions

### 1. `loadMarkdown(fileObj)`
This function takes a file object from the **Kassette** array and performs the following tasks:
- Fetches the Markdown file based on the `path`.
- Converts the Markdown content into HTML using **Showdown.js**.
- Removes any `id` attributes from the HTML for uniqueness.
- Creates a new `div` element, assigns the `className` for styling, and appends the content to the `#content` element on the page.

#### Steps:
- Fetches the file at `fileObj.path`.
- Converts the content to HTML using the **Showdown** library.
- Appends the content to the page inside a `div` with a class defined in `fileObj.className`.

### 2. `loadAllMarkdowns()`
This function asynchronously loads all the Markdown files listed in the **Kassette** array.
- It iterates through the **Kassette** array, calling `loadMarkdown` for each file.
- Ensures that each Markdown file is fully loaded before proceeding to the next.
- Once all files are loaded, it displays the `#content` div.

### 3. Event Listener
The script adds an event listener to the DOM, which triggers the loading process when the page has fully loaded.

## Flow

1. When the page loads, `loadAllMarkdowns()` is triggered.
2. For each file in the **Kassette** array:
   - `loadMarkdown(fileObj)` fetches and converts the Markdown file into HTML.
   - The converted content is inserted into the `#content` div with the correct styling.
3. After all files are loaded, the content becomes visible on the page.

## Example Workflow

- A user visits the page.
- The JavaScript module fetches Markdown files (e.g., `'one/1.md'`, `'two/2.md'`).
- These files are converted into HTML and styled with their respective classes (`'one'`, `'two'`).
- The content is then displayed in the main content area of the webpage.

This modular approach allows for easily updating or changing the content structure by simply modifying the **Kassette** array or the Markdown files it references.
