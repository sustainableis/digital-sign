
function setStatus(msg) {
  $('#status').html(msg);
};

function startSign() {
  setStatus('Loading Sign...');
  window.location = signUrl;
};

function testConnection() {
  $('body').append('<script src="http://sustainableis.com/facilities/sign_start"></script>');
  setTimeout(function() {
    window.location.hash = 'reload';
    window.location.reload();
  }, 15000);
};

$(function() {
  if (window.location.hash == '#reload') {
    setStatus('Network Error - Retrying...');
    testConnection();    
  } else {
    setTimeout(function() {
      setStatus('Testing Connection...');
      testConnection();
    }, 3000);
  }
});