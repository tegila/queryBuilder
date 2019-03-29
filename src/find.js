/**
 * Query and Projection Operators
 * See {@link https://docs.mongodb.com/manual/reference/operator/query/}
 * Also {@link http://mongodb.github.io/node-mongodb-native/3.1/api/BulkOperationBase.html#find}
 */
const Find = (ts, filter) => {
  const transaction = {
    ...ts,
    payload: {
      type: 'find',
      subtype: 'findOne',
      filter: filter || {},
      limit: null,
      sort: null,
      skip: null,
      projection: null
    },
  };
  return (self = {
    filter: filter => {
      Object.assign(transaction.payload, { filter });
      return self;
    },
    all: () => {
      Object.assign(transaction.payload, { subtype: 'findMany' });
      return self;
    },
    one: () => {
      Object.assign(transaction.payload, { subtype: 'findOne' });
      return self;
    },
    projection: projection => {
      Object.assign(transaction.payload, { subtype: 'paginate', projection });
      return self;
    },
    limit: limit => {
      Object.assign(transaction.payload, { subtype: 'paginate', limit });
      return self;
    },
    skip: skip => {
      Object.assign(transaction.payload, { subtype: 'paginate', skip });
      return self;
    },
    sort: sort => {
      Object.assign(transaction.payload, { subtype: 'paginate', sort });
      return self;
    },
    count: count => {
      Object.assign(transaction.payload, {
        subtype: 'countDocuments',
        count
      });
      return self;
    },
    value: () => transaction,
  });
};

module.exports = Find;
