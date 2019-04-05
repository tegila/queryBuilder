const Delete = (parent, filter) => {
  const payload = Object.assign({}, parent.payload, {
    type: 'delete',
    subtype: 'deleteOne',
    filter: filter || {},
    nonce: Math.random()
  });

  const self = {
    payload,
    filter: filter => {
      Object.assign(payload, { filter });
      return self;
    },
    all: () => {
      Object.assign(payload, { subtype: 'deleteMany' });
      return self;
    },
    one: () => {
      Object.assign(payload, { subtype: 'deleteOne' });
      return self;
    },
    delete: filter => {
      Object.assign(payload.filter, { filter: filter });
      return self;
    },
    value: () => payload,
  };

  return Object.assign(parent, self);
};

module.exports = Delete;
