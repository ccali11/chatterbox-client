var FormView = {
  $form: $('form'),
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: Rooms.selected || 'lobby'
    };

    Parse.create(message, (data) => {
      _.extend(message, data);
      Messages.add(message, MessagesView.render);
    });
  },

  setStatus: (active) => {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};