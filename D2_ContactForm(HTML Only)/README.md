# *Instruction & Requirements*
Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

**Requirements**

The form should contain the following elements:
- Name field.
- Email field.
- Message field. Since the message can be long, a `textarea` will be more suitable.
- Submit button
     - Contains the text "Send".
     - Clicking on the submit button submits the form.
- The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
- There is no need to do any client-side validation on the fields. Validation will be done on the server side.

**Submission API**

Upon submission, `POST` the form data to https://www.greatfrontend.com/api/questions/contact-form with the following fields in the **request body**: `name`, `email`, `message`.

If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!

**Notes**

You do not need JavaScript for this question, the focus is on HTML form validation and submission.

# *My Problem-solving Ideas*
In developing the HTML structure for the form submission, I incorporated several key considerations to ensure the form's functionality and enhance user experience. Below are the insights that guided my decision-making process:

1. **Specifying action and method in the `form` tag:** Given the constraints that prevent modifying the JavaScript handling form submission, it became essential to explicitly define the submission URL (`action`) and the request method (`method`) within the HTML structure. This approach guarantees that the form data is submitted correctly to the designated endpoint using the `POST` method. This direct specification within the `form` tag is not merely an inline method but a fundamental aspect of HTML form configuration that dictates how and where form data should be submitted.

2. **Utilizing the for attribute in `label` tags:** The for attribute plays a crucial role in associating each `label` with its corresponding form control. By matching the for attribute's value with the `id` of the form element, clicking on the label focuses on the associated input, significantly improving accessibility and user interaction. This linkage is especially beneficial for enhancing the usability on mobile devices and for users relying on screen readers, underlining the importance of including the `for` attribute in labels for a more accessible form.

3. **Incorporating the name attribute in `input` tags:** The name attribute is pivotal for the form submission process, acting as the key for each piece of data submitted. It facilitates the server-side retrieval of form values by providing a unique identifier (`key`) for each input, which is crucial for processing and responding to user submissions. Omitting the name attribute would result in the input's data not being submitted, highlighting the necessity of this attribute to collect and transmit user inputs effectively.

# *Better problem-solving ideas*
This question is simple. So there is no further analysis. 
Please see [*here*](https://www.greatfrontend.com/questions/user-interface/contact-form/vanilla/solution) for the detailed explanation of the original Solution.