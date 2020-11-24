var Messages = {
  _data: {},

  items: () => {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: (message, callback = ()=>{}) => {
    Messages._data[message.objectId] = message;
    callback(Messages.items());
  },

  update: (messages, callback = ()=>{}) => {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.objectId] = Messages._conform(message);
    }

    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: (message) => {
    // ensure each message object conforms to expected shape
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }
};