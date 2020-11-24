var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    render: _.template (
      //<!--
      `<select
      </select>`
      //-->
    );
  },

  renderRoom: (data) => {
    debugger;
    RoomsView.$select.append(RoomsView.render(data));
  },

  handleChange: (event) => {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: (event) => {
    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }
};
