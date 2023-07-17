// Get the feedback form element
var feedbackForm = document.getElementById('feedbackForm');

// Listen for form submission
feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var rating = document.querySelector('input[name="rating"]:checked').value;
  var feedback = document.getElementById('feedback').value;

  // Display popup
  var popup = document.getElementById('popup');
  popup.style.display = 'block';

  // Clear form values
  feedbackForm.reset();
});

// Close the popup
var closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
});