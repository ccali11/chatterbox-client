var Friends = {
  _data: new Set,

  items: () => {
    return _.chain([...Friends._data]);
  },

  isFriend: (name) => {
    return Friends._data.has(name);
  },

  toggleStatus: (name, callback = ()=>{}) => {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }
};