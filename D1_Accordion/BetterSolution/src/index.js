/**
 * @param {HTMLElement} $rootEl - It takes the root element where all the accordion items will be appended.
 * @param {Object} options - It takes the attributes of the accordions.
 */
(() => {
  function accordion($rootEl, { sections }) {
    function attachEvents() {
      // Use Event Delegation.
      $rootEl.addEventListener('click', (event) => {
        const target = event.target;
        /**
           * This statement checks if the target is not a button or not contains the class of accordion-item-title.
           * if so, it will return nothing, which means if the user doesn't click on the button or the title, it will return nothing.
           */
        if (
          // tagName is always return as uppercase.
          
          target.tagName !== 'BUTTON' ||
          !target.classList.contains('accordion-item-title')
        ) {
          return;
        }

        // Find the icon and toggle the direction.
        const $icon = target.querySelector(
          '.accordion-icon',
        );
        
        $icon.classList.toggle('accordion-icon--rotated');

        // Find the accordion contents and toggle the
        // contents' visibility.
        const $accordionContents = target.nextSibling;
        $accordionContents.hidden =
          !$accordionContents.hidden;
      });
    }

    function init() {
      $rootEl.classList.add('accordion');
      // Use DocumentFragment method to reduce the reflow and repaint on the real DOM. Make all the changes happen in the RAM to increase the performance.
      const $accordionSections =
        document.createDocumentFragment();

      sections.forEach(({ value, title, contents }) => {
        const $accordionSection =
          document.createElement('div');
        $accordionSection.classList.add('accordion-item');

        const $accordionTitleBtn =
          document.createElement('button');
        $accordionTitleBtn.classList.add(
          'accordion-item-title',
        );
        $accordionTitleBtn.type = 'button';
        $accordionTitleBtn.setAttribute(
          'data-value',
          value,
        );

        const $accordionIcon =
          document.createElement('span');
        $accordionIcon.classList.add('accordion-icon');
        $accordionIcon.setAttribute('aria-hidden', 'true');

        $accordionTitleBtn.append(title, $accordionIcon);

        const $accordionSectionContents =
          document.createElement('div');
        $accordionSectionContents.classList.add(
          'accordion-item-contents',
        );
        $accordionSectionContents.hidden = true;
        $accordionSectionContents.textContent = contents;

        $accordionSection.append(
          $accordionTitleBtn,
          $accordionSectionContents,
        );
        $accordionSections.append($accordionSection);
      });

      $rootEl.appendChild($accordionSections);
    }
    // Initialize the accordion HTML structure.
    init();
    // Attach the event listners to the buttons and the titles.
    attachEvents();
  }

  // Initialze the accordion component and pass element "accordioin" to the accordion function.
  accordion(document.getElementById('accordion'), {
    sections: [
      {
        value: 'html',
        title: 'HTML',
        contents:
          'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
      },
      {
        value: 'css',
        title: 'CSS',
        contents:
          'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
      },
      {
        value: 'javascript',
        title: 'JavaScript',
        contents:
          'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
      },
    ],
  });
})();
