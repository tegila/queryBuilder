/**
 * Query and Projection Operators
 * See {@link https://docs.mongodb.com/manual/reference/operator/query/}
 * Also {@link http://mongodb.github.io/node-mongodb-native/3.1/api/BulkOperationBase.html#find}
 */
const Find = (ts, filter) => {
  const transaction = {
    ...ts,
    type: 'find',
    payload: {
      type: 'findOne',
      filter: filter || {},
    },
  };
  return (self = {
    filter: filter => {
      Object.assign(transaction.payload, { filter });
      return self;
    },
    all: () => {
      Object.assign(transaction.payload, { type: 'findMany' });
      return self;
    },
    one: () => {
      Object.assign(transaction.payload, { type: 'findOne' });
      return self;
    },
    limit: value => {
      Object.assign(transaction.payload, { type: 'limit', limit: value });
      return self;
    },
    projection: projection => {
      Object.assign(transaction.payload, { projection });
      return self;
    },
    skip: value => {
      Object.assign(transaction.payload, { skip: value });
      return self;
    },
    sort: object => {
      Object.assign(transaction.payload, { sort: object });
      return self;
    },
    value: () => transaction,
  });
};

module.exports = Find;
