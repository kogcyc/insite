// Function to load individual markdown files, convert them, and append to the page
function loadMarkdown(fileObj) {
    const filePath = `${fileObj.dir}/${fileObj.fn}`;
    console.log(`Loading markdown file from: ${filePath}`); // Debugging aid

    let classNames = fileObj.classes || fileObj.dir; // Use directory if classes are empty
    console.log(`Using class names: ${classNames}`); // Debugging aid

    // Fetch the markdown file
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                console.error(`Failed to fetch ${filePath}:`, response.statusText);
                throw new Error('Network response was not ok');
            }
            console.log(`Successfully fetched ${filePath}`); // Debugging aid
            return response.text();
        })
        .then(data => {
            console.log(`Markdown content fetched, now converting to HTML`); // Debugging aid

            // Convert markdown to HTML using Showdown
            const converter = new showdown.Converter({ headerLevelStart: 3, noHeaderId: true });
            let htmlContent = converter.makeHtml(data);
            console.log(`Converted markdown to HTML`); // Debugging aid

            // Create the replacement link
            const linkToPage = `<a href="${fileObj.dir}/${fileObj.fn.replace('.md', '.html')}">link to this page</a>`;
            console.log(`Generated link: ${linkToPage}`); // Debugging aid

            // Use a temporary div to manipulate the content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;
            console.log(`HTML content set in tempDiv`); // Debugging aid

            // Find the hiddenLink div and insert the link inside it
            const hiddenLinkDiv = tempDiv.querySelector('.hiddenLink');
            if (hiddenLinkDiv) {
                console.log(`Found <div class="hiddenLink"></div> and inserting link inside it`); // Debugging aid
                hiddenLinkDiv.innerHTML = linkToPage;
            } else {
                console.warn(`No <div class="hiddenLink"></div> found in ${filePath}`); // Debugging aid
            }

            // Create a new div to contain the processed content
            const contentDiv = document.createElement('div');
            contentDiv.className = classNames;
            contentDiv.innerHTML = tempDiv.innerHTML; // Set the processed HTML content

            // Append the content div to the main content area
            document.getElementById('content').appendChild(contentDiv);
            console.log(`Appended content to #content`); // Debugging aid
        })
        .catch(error => console.error('Error fetching or processing markdown:', error)); // Debugging aid
}

// Function to load all markdown files after fetching the kassette.json
async function loadAllMarkdowns() {
    try {
        console.log('Fetching kassette.json'); // Debugging aid
        const response = await fetch('./kassette.json');
        if (!response.ok) {
            throw new Error(`Failed to load kassette.json: ${response.statusText}`);
        }
        const kassette = await response.json(); // Load the JSON data
        console.log('Loaded kassette.json:', kassette); // Debugging aid

        // Loop through the kassette array and load each markdown file
        for (const fileObj of kassette) {
            console.log(`Processing file: ${fileObj.fn} from directory: ${fileObj.dir}`); // Debugging aid
            await loadMarkdown(fileObj); // Wait for each markdown to fully load before proceeding
        }

        // Show the content div once all markdown files are loaded
        document.getElementById('content').style.display = 'block';
        console.log('All markdown files loaded and content is now visible'); // Debugging aid
    } catch (error) {
        console.error('Error loading kassette.json or markdown files:', error); // Debugging aid
    }
}

// Event listener to start loading markdown files when the DOM is ready
document.addEventListener('DOMContentLoaded', loadAllMarkdowns);
