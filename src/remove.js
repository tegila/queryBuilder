const Delete = (ts, filter) => {
  const transaction = {
    ...ts,
<<<<<<< HEAD
=======
    type: 'delete',
>>>>>>> 65ab7838e31b80a81da6f78d40a87fbd72f0e488
    payload: {
      type: 'delete',
      subtype: 'deleteOne',
      filter: filter || {},
    },
  };
  return (self = {
    filter: filter => {
      Object.assign(transaction.payload, { filter });
      return self;
    },
    all: () => {
      Object.assign(transaction.payload, { subtype: 'deleteMany' });
      return self;
    },
    one: () => {
      Object.assign(transaction.payload, { subtype: 'deleteOne' });
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
