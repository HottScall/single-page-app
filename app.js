// upon load, create the app

window.addEventListener("load", function(){

//understands the list of notes and returns them as a HTML string

  var notesView = new NotesView([]);

//understands what a note is

  var noteModel = NoteModel

// controller listens to submit events. Creates a note, adds it to the list and updates the DOM
  var controller = new NotesController(noteModel, notesView)

// create the app and update the DOM
  controller.updateDOM();

})
