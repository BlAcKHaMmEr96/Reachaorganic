document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get('firstname');
  const email = formData.get('email');
  const message = formData.get('message');

  alert(`Thanks ${name}, your message has been sent!`);

  this.reset();
});
