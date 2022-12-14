

document.addEventListener('DOMContentLoaded', function() {
  var cursorOptions = document.getElementById('cursor-options');
  var cursorImage = document.getElementById('cursor-image');
  cursorOptions.addEventListener('change', function() {
    var selectedOption = cursorOptions.options[cursorOptions.selectedIndex].value;
    if (selectedOption === 'default') {
      document.body.style.cursor = 'default';
      cursorImage.src ='';
    } else {
      document.body.style.cursor = '(C:\Users\ewing\Desktop\BTS_Cursor_Project.V3' + selectedOption + '.png), default';
      cursorImage.src = 'C:\Users\ewing\Desktop\BTS_Cursor_Project.V3' + selectedOption + '.png';
    }
  });
});
