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
    projection: projection => {
      Object.assign(transaction.payload, { projection });
      return self;
    },
    one: () => {
      Object.assign(transaction.payload, { type: 'findOne' });
      return self;
    },
    all: () => {
      Object.assign(transaction.payload, { type: 'findMany' });
      return self;
    },
    count: count => {
      Object.assign(transaction.payload, { type: 'count', count });
      return self;
    },
    limit: limit => {
      Object.assign(transaction.payload, { type: 'paginate', limit });
      return self;
    },
    skip: skip => {
      Object.assign(transaction.payload, { type: 'paginate', skip });
      return self;
    },
    sort: sort => {
      Object.assign(transaction.payload, { sort });
      return self;
    },
    value: () => transaction,
  });
};

module.exports = Find;
