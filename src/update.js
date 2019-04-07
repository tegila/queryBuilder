const Update = (parent, filter) => {
  const payload = Object.assign({}, parent.payload, {
    type: 'update',
    subtype: 'updateOne',
    filter: filter || {},
    nonce: Math.random()
  });

  /** Field Update Operators */
  const self = {
    payload,
    filter: filter => {
      Object.assign(payload, { filter });
      return parent;
    },
    with: new_value => {
      Object.assign(payload, { update: new_value });
      return parent;
    },
    one: () => {
      Object.assign(payload, { subtype: 'updateOne' });
      return parent;
    },
    many: () => {
      Object.assign(payload, { subtype: 'updateMany' });
      return parent;
    },
    ops: ops => {
      Object.assign(payload, { ops });
      return parent;
    },
    value: () => payload
  };

  return Object.assign(parent, self);
};

module.exports = Update;
