const CountDocuments = (ts, filter) => {
  const transaction = {
    ...ts,
    type: 'countDocuments',
    payload: {
      type: '',
      filter: filter || {},
    },
  };
  return (self = {
    filter: filter => {
      Object.assign(transaction.payload, { filter });
      return self;
    },
    limit: value => {
      Object.assign(transaction.payload, { limit: value });
      return self;
    },
    skip: value => {
      Object.assign(transaction.payload, { skip: value });
      return self;
    },
    hint: value => {
      Object.assign(transaction.payload, { hint: value });
      return self;
    },
    maxTimeMS: value => {
      Object.assign(transaction.payload, { maxTimeMS: value });
      return self;
    },
    value: () => transaction,
  });
};

module.exports = CountDocuments;

