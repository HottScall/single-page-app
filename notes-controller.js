function NotesController (noteModel, notesView){
  this.noteModel = noteModel
  this.notesView = notesView

  // run only once, set up the submit event listener
  this._setup();

}

NotesController.prototype = {
  _setup: function(){
    var self = this
  //sets up an event listener for submit events
    window.addEventListener("submit", function(event){
      // stop the submission of the form
      event.preventDefault()
      console.log(event)

        var note = new self.noteModel(event.target[0].value)
          self.notesView.add(note)
          self.updateDOM()

      })
  },

  updateDOM: function (){
  document.getElementById('app').innerHTML = this.notesView.render()
  }
}
