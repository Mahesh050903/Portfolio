document.addEventListener('DOMContentLoaded', function() {
  var phoneElement = document.getElementById('phone');
  phoneElement.addEventListener('click', function() {
    var phoneNumber = phoneElement.innerText;
    navigator.clipboard.writeText(phoneNumber)
      .then(function() {
        var messageElement = document.createElement('span');
        messageElement.textContent = 'Phone number copied to clipboard!';
        messageElement.classList.add('copy-message');
        phoneElement.parentNode.insertBefore(messageElement, phoneElement.nextSibling);
        setTimeout(function() {
          messageElement.remove();
        }, 2000);
      })
      .catch(function(err) {
        console.error('Failed to copy: ', err);
      });
  });
});
