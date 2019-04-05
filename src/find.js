/**
 * Query and Projection Operators
 * See {@link https://docs.mongodb.com/manual/reference/operator/query/}
 * Also {@link http://mongodb.github.io/node-mongodb-native/3.1/api/BulkOperationBase.html#find}
 */
const Find = (parent, filter) => {
  const payload = Object.assign({}, parent.payload, {
    type: 'find',
    subtype: 'findOne',
    filter: filter || {},
    limit: null,
    sort: null,
    skip: null,
    projection: null,
    nonce: Math.random(),
  });

  const self = {
    payload,
    filter: filter => {
      Object.assign(payload, { filter });
      return parent;
    },
    all: () => {
      Object.assign(payload, { subtype: 'findMany' });
      return parent;
    },
    one: () => {
      Object.assign(payload, { subtype: 'findOne' });
      return parent;
    },
    projection: projection => {
      Object.assign(payload, { subtype: 'paginate', projection });
      return parent;
    },
    limit: limit => {
      Object.assign(payload, { subtype: 'paginate', limit });
      return parent;
    },
    skip: skip => {
      Object.assign(payload, { subtype: 'paginate', skip });
      return parent;
    },
    sort: sort => {
      Object.assign(payload, { subtype: 'paginate', sort });
      return parent;
    },
    count: count => {
      Object.assign(payload, {
        subtype: 'countDocuments',
        count,
      });
      return parent;
    },
    value: () => payload,
  };

  return Object.assign(parent, self);
};

module.exports = Find;
