// Function to load individual markdown files, convert them, and append to the page
function loadMarkdown(fileObj) {
    const filePath = `${fileObj.dir}/${fileObj.fn}`; 
    let classNames = fileObj.classes || fileObj.dir; // Use directory if classes are empty
    console.log(classNames);
    
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
            const linkToPage = `<a class="hiddenLink" href="${fileObj.dir}/${fileObj.fn.replace('.md', '.html')}">link to this page</a>`;

            // Replace the <div class="hiddenlink"></div> with the generated link
            htmlContent = htmlContent.replace('<div class="hiddenlink"></div>', linkToPage);

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;

            const contentDiv = document.createElement('div');
            contentDiv.className = classNames;
            contentDiv.innerHTML = tempDiv.innerHTML;
            console.log(tempDiv.innerHTML);

            document.getElementById('content').appendChild(contentDiv);
        })
        .catch(error => console.error('Error fetching markdown:', error));
}
