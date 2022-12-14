// Listen for when the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
  // Get the cursor options drop-down list and cursor image elements
  var cursorOptions = document.getElementById('cursor-options');
  var cursorImage = document.getElementById('cursor-image');

  // Listen for changes to the selected option in the drop-down list
  cursorOptions.addEventListener('change', function() {
    // Get the value of the selected option
    var selectedOption = cursorOptions.options[cursorOptions.selectedIndex].value;

    if (selectedOption === 'default') {
      // If the default option is selected, reset the cursor to the default style
      document.body.style.cursor = 'default';
      cursorImage.src = '';
    } else {
      // Otherwise, set the cursor to use the selected image
      document.body.style.cursor = 'url(C:\\Users\\ewing\Desktop\\BTS_Cursor_Project.V3' + selectedOption + '.png), default';
      cursorImage.src = 'C:\\Users\\ewing\\Desktop\\BTS_Cursor_Project.V3' + selectedOption + '.png';
    }
  });
});
