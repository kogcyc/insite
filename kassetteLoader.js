// Function to load individual markdown files, convert them, and append to the page
function loadMarkdown(fileObj) {
    console.log(`start`);
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
            let htmlContent = converter.makeHtml(data);

            // Create the replacement link
            const linkToPage = `<a href="${fileObj.dir}/${fileObj.fn.replace('.md', '.html')}">link to this page</a>`;

            // Use a temporary div to manipulate the content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;

            // Find the hiddenLink div and insert the link inside it
            const hiddenLinkDiv = tempDiv.querySelector('.hiddenLink');
            if (hiddenLinkDiv) {
                hiddenLinkDiv.innerHTML = linkToPage;
            }

            // Create a new div to contain the processed content
            const contentDiv = document.createElement('div');
            contentDiv.className = classNames;
            contentDiv.innerHTML = tempDiv.innerHTML; // Set the processed HTML content

            // Append the content div to the main content area
            document.getElementById('content').appendChild(contentDiv);
        })
        .catch(error => console.error('Error fetching markdown:', error));
}
