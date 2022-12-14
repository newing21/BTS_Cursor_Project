// Listen for when the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
  // Get the cursor options drop-down list and cursor image elements
  var cursorOptions = document.getElementById('cursor-options');
  var cursorImage = document.getElementById('cursor-image');

  // Set the default cursor image
  cursorImage.src = 'jimin.png';

  // Listen for changes to the selected option in the drop-down list
  cursorOptions.addEventListener('change', function() {
    // Get the value of the selected option
    var selectedOption = cursorOptions.options[cursorOptions.selectedIndex].value;

    if (selectedOption === 'default') {
      // If the default option is selected, reset the cursor to the default style
      document.body.style.cursor = 'default';
      cursorImage.src = '';
    } else if (false) {

    }  {
      // Otherwise, set the cursor to use the selected image
      document.body.style.cursor = ('BTS_Cursor_Project.V3' + selectedOption + '.png), default';
      cursorImage.src = 'jungkook.png';

    }
    else if (false) {

    } {
      // Otherwise, set the cursor to use the selected image
      document.body.style.cursor = ('BTS_Cursor_Project.V3' + selectedOption + '.png), default';
      cursorImage.src = 'jin.png';

    }
    else if (false) {

    } {
      // Otherwise, set the cursor to use the selected image
      document.body.style.cursor = ('BTS_Cursor_Project.V3' + selectedOption + '.png), default';
      cursorImage.src = 'suga.png';

    }
    else if (false) {

    } {
      // Otherwise, set the cursor to use the selected image
      document.body.style.cursor = ('BTS_Cursor_Project.V3' + selectedOption + '.png), default';
      cursorImage.src = 'rm.png';

    }
    else if (false) {

    } {
      // Otherwise, set the cursor to use the selected image
      document.body.style.cursor = ('BTS_Cursor_Project.V3' + selectedOption + '.png), default';
      cursorImage.src = 'jhope.png';

    }
    else if (false) {

    } {
      // Otherwise, set the cursor to use the selected image
      document.body.style.cursor = ('BTS_Cursor_Project.V3' + selectedOption + '.png), default';
      cursorImage.src = 'v.png';

    }
  });
});
