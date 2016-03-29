// Disable link clicks to prevent page scrolling
$(document).on('click', 'a[href="#fakelink"]', function (e) {
  e.preventDefault();
});