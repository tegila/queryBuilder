
const Insert = (ts, data) => {
  const transaction = {
    ...ts,
    payload: {
      type: 'insert',
      subtype: 'insertOne',
      data: data,
    },
  };
  return self = {
    one: (data) => {
      payload = Object.assign(transaction.payload, { data: data });
      return self;
    },
    many: (array) => {
      payload = Object.assign(transaction.payload, { 
        subtype: 'insertMany',
        data: array
      });
      return self;
    },
    options: (options) => {
      payload = Object.assign(transaction.payload, { options: options });
      return self;
    },
    value: () => transaction
  };
};

module.exports = Insert;
