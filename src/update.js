const Update = (ts, filter) => {
  const transaction = {
    ...ts,
    payload: {
      type: 'update',
      subtype: 'updateOne',
      filter: filter || {},
    },
  };
  /** Field Update Operators */
  return self = {
    filter: filter => {
      Object.assign(transaction.payload, { filter });
      return self;
    },
    with: new_value => {
      Object.assign(transaction.payload, { update: new_value });
      return self;
    },
    one: () => {
      Object.assign(transaction.payload, { subtype: 'updateOne' });
      return self;
    },
    many: () => {
      Object.assign(transaction.payload, { subtype: 'updateMany' });
      return self;
    },
    ops: ops => {
      Object.assign(transaction.payload, { ops });
      return self;
    },
    value: () => transaction
  }
};

module.exports = Update;
