var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('submit', MessagesView.renderMessage);
  },

  render: function() {
    _.each(Messages, (message) => {
      var $message = MessageView.render(message);
      MessagesView.$chats.prepend($message);
    });
  },

  renderMessage: (data) => {
    MessagesView.$chats.append(MessageView.render(data));
    // $.getJSON('/client/scripts/messages.js', function(data) {
    //   var html = MessageView.render(data);
    //   this.$chats.append(html);
    // });
  }

};