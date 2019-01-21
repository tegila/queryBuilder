const Find = require('./find');
const Insert = require('./insert');
const Remove = require('./remove');
const Update = require('./update');
const CountDocuments = require('./countDocuments.js');

const queryBuilder = (database, collection) => {
  const transaction = {
    database,
    collection
  };

  return (self = {
    database: name => {
      Object.assign(transaction, { database: name });
      return self;
    },
    collection: name => {
      Object.assign(transaction, { collection: name });
      return self;
    },
    find: filter => Find(transaction, filter),
    insert: data => Insert(transaction, data),
    update: filter => Update(transaction, filter),
    remove: filter => Remove(transaction, filter),
    countDocuments: filter => CountDocuments(transaction, filter),
  });
};

module.exports = queryBuilder;
