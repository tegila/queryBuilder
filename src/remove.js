const Delete = (ts, filter) => {
  const transaction = {
    ...ts,
    type: 'remove',
    payload: {
      type: 'deleteOne',
      filter: filter || {},
    },
  };
  return (self = {
    filter: filter => {
      Object.assign(transaction.payload, { filter });
      return self;
    },
    all: () => {
      Object.assign(transaction.payload, { type: 'deleteMany' });
      return self;
    },
    one: () => {
      Object.assign(transaction.payload, { type: 'deleteOne' });
      return self;
    },
    delete: filter => {
      Object.assign(transaction.payload.filter, { filter: filter });
      return self;
    },
    value: () => transaction,
  });
};

module.exports = Delete;
