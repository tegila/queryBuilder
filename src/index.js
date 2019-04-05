const Find = require('./find');
const Insert = require('./insert');
const Remove = require('./remove');
const Update = require('./update');

const queryBuilder = (database, collection) => {
  const payload = {
    database,
    collection
  };
  
  return (self = {
    payload,
    database: database => {
      Object.assign(payload, { database });
      return self;
    },
    collection: collection => {
      Object.assign(payload, { collection });
      return self;
    },
    find: filter => Find(self, filter),
    insert: data => Insert(self, data),
    update: filter => Update(self, filter),
    remove: filter => Remove(self, filter),
  });
};

module.exports = queryBuilder;
