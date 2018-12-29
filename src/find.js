/**
 * Query and Projection Operators
 * See {@link https://docs.mongodb.com/manual/reference/operator/query/}
 * Also {@link http://mongodb.github.io/node-mongodb-native/3.1/api/BulkOperationBase.html#find}
 */
const Find = transaction => {
  return (self = {
    all: () => {
      Object.assign(transaction.payload, { type: 'all' });
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
    /**
     * @returns JSON
     */
    value: () => transaction,
  });
};

module.exports = Find;
