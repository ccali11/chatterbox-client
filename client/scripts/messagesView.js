var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: (data) => {
    //debugger;
    MessagesView.$chats.append(MessageView.render(data));
    // $.getJSON('/client/scripts/messages.js', function(data) {
    //   var html = MessageView.render(data);
    //   this.$chats.append(html);
    // });
  }

};