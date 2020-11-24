var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
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
  }
};
