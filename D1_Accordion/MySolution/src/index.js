import './styles.css';

// Write your JavaScript here.
// Use DOM API to select the div element that contains certain heading.
const htmlSection = document.getElementById('htmlSection');
const cssSection = document.getElementById('cssSection');
const jsSection = document.getElementById('jsSection');


/**
 * 
 * @param {string} content - The content of the section to be toggled by its value of display property.
 * @param {string} section - The icon of the section to be rotated by adding or removing a class.
 */
function toggleContent(content, section) {
    if(content.style.display === 'block') {
        content.style.display = 'none';

        section.querySelector('.accordion-icon').classList.remove('accordion-icon--rotated');

    } else {
        content.style.display = 'block';
        section.querySelector('.accordion-icon').classList.add('accordion-icon--rotated');
    }
}


// Add event listeners to the sections to toggle the content when the section is clicked, and pass
// the content and the section to the toggleContent function.
htmlSection.addEventListener('click', () => {
    const content = htmlSection.nextElementSibling;
    toggleContent(content, htmlSection);
})

cssSection.addEventListener('click', () => {
    const content = cssSection.nextElementSibling;
    toggleContent(content, cssSection);
})

jsSection.addEventListener('click', () => {
    const content = jsSection.nextElementSibling;
    toggleContent(content, jsSection);
})