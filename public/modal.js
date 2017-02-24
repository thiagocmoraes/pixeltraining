var setInstructions = function(title, instructions, footer) {
  title = title || '';
  instructions = instructions || '';
  footer = footer || '';
  addParagraph('ex-title', title);
  for(var i = 0; i < instructions.length; i++) {
    addParagraph('modal-body', instructions[i]);
  }
  addParagraph('ex-footer', footer);
};

var addParagraph = function(className, content) {
  var div = document.getElementsByClassName(className)[0];
  var p = document.createElement('p');
  p.innerHTML = content;
  $(div).append(p);
};

$(document).ready(function(){
  var modal = 
    '<div id="myModal" class="modal">'
    + '<!-- Modal content -->'
    + '    <div class="modal-content">'
    + '      <div class="modal-header">'
    + '        <span class="close">&times</span>'
    + '        <h2 class="ex-title"></h2>'
    + '      </div>'
    + '      <div class="modal-body">'
    + '      </div>'
    + '      <div class="modal-footer">'
    + '        <h3 class="ex-footer"></h3>'
    + '      </div>'
    + '    </div>'
    + '</div>';

  $(document.body).append(modal);

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
});