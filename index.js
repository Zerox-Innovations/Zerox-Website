// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the form from submitting the traditional way

//         var params = {
//             name: document.getElementById("name").value,
//             email: document.getElementById("email").value,
//             subject: document.getElementById("subject").value,
//             message: document.getElementById("message").value
//         };

//         const serviceID = "service_5dtpj24";
//         const templateID = "template_umzmdhg";

//         // Cache the DOM elements
//         const loadingMessage = document.querySelector('.loading');
//         const sentMessage = document.querySelector('.sent-message');
//         const errorMessage = document.querySelector('.error-message');
//         const submitButton = document.querySelector('button[type="submit"]');

//         // Show the loading message and disable the submit button
//         loadingMessage.style.display = 'block';
//         submitButton.disabled = true;

//         emailjs.send(serviceID, templateID, params)
//             .then(function(response) {
//                 console.log('SUCCESS!', response.status, response.text);

//                 // Hide the loading message and show the success message
//                 loadingMessage.style.display = 'none';
//                 sentMessage.style.display = 'block';

//                 // Reset the form after submission
//                 document.getElementById("contact-form").reset();
//             }, function(error) {
//                 console.log('FAILED...', error);

//                 // Hide the loading message and show the error message
//                 loadingMessage.style.display = 'none';
//                 errorMessage.style.display = 'block';

//                 // Optionally add more specific error feedback
//                 errorMessage.innerText = `There was an error sending your message (${error.text}). Please try again later.`;
//             })
//             .finally(function() {
//                 // Re-enable the submit button
//                 submitButton.disabled = false;
//             });
//     });
// });
