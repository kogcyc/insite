// Function to load individual markdown files, convert them, and append to the page
function loadMarkdown(fileObj) {
    console.log('start');
    const filePath = `${fileObj.dir}/${fileObj.fn}`; 
    let classNames = fileObj.classes || fileObj.dir; // Use directory if classes are empty

    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const converter = new showdown.Converter({ headerLevelStart: 3, noHeaderId: true });
            const htmlContent = converter.makeHtml(data);

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;

            const contentDiv = document.createElement('div');
            contentDiv.className = classNames;
            contentDiv.innerHTML = tempDiv.innerHTML;

            document.getElementById('content').appendChild(contentDiv);
        })
        .catch(error => console.error('Error fetching markdown:', error));
}

// Function to load all markdown files after fetching the kassette.json
async function loadAllMarkdowns() {
    try {
        const response = await fetch('./kassette.json');
        const kassette = await response.json(); // Load the JSON data

        // Loop through the kassette array and load each markdown file
        for (const fileObj of kassette) {
            await loadMarkdown(fileObj);
        }

        // Show the content div once all markdown files are loaded
        document.getElementById('content').style.display = 'block';
    } catch (error) {
        console.error('Error loading kassette.json:', error);
    }
}

// Event listener to start loading markdown files when the DOM is ready
document.addEventListener('DOMContentLoaded', loadAllMarkdowns);
