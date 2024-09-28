// Import the kassette array from kassette.js
import { kassette } from './kassette.js';

// Function to load individual markdown files, convert them, and append to the page
export function loadMarkdown(fileObj) {
    const filePath = fileObj.path; // Get the file path
    let classNames = fileObj.classNames; // Get the class names for styling

    // If classNames are not provided, derive them from the directory of the file path
    if (!classNames) {
        const directory = filePath.substring(0, filePath.lastIndexOf('/'));
        classNames = directory.split('/').pop(); // Use the last part of the directory as className
    }

    // Fetch the markdown file
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Handle fetch error
            }
            return response.text(); // Return the markdown text
        })
        .then(data => {
            // Convert markdown to HTML using Showdown
            const converter = new showdown.Converter({ headerLevelStart: 3, noHeaderId: true }); // Disable heading IDs
            const htmlContent = converter.makeHtml(data); // Convert markdown to HTML

            // Create a temporary div to hold the HTML content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;

            // Create a new div to contain the processed content
            const contentDiv = document.createElement('div');
            contentDiv.className = classNames; // Assign the class(es) (from JSON or directory)
            contentDiv.innerHTML = tempDiv.innerHTML; // Set the processed HTML content

            // Append the content div to the main content area
            document.getElementById('content').appendChild(contentDiv);
        })
        .catch(error => console.error('Error fetching markdown:', error)); // Log any errors during fetch
}

// Asynchronously load all markdown files in the order they are listed
export async function loadAllMarkdowns() {
    // Loop through the kassette array and load each markdown file
    for (const fileObj of kassette) {
        await loadMarkdown(fileObj); // Wait for each markdown to fully load before proceeding
    }
    // Once all markdown files are loaded, show the content div
    document.getElementById('content').style.display = 'block';
}

// Event listener to start loading markdown files when the DOM is ready
document.addEventListener('DOMContentLoaded', loadAllMarkdowns);
