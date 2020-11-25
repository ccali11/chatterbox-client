var MessagesView = {
  $chats: $('#chats'),

  initialize: () => {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: () => {
    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: (message) => {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: (event) => {
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
  }
};