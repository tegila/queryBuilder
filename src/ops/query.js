/**
 * Query and Projection Operators
 * See {@link https://docs.mongodb.com/manual/reference/operator/query/}
 */
const Query = () => {
  return (self = {
    payload: {},
    /**
     * Comparison Query Operators
     * See {@link https://docs.mongodb.com/manual/reference/operator/query-comparison/}
     **/
    eq: (field, value) => {
      console.log('eq');
      Object.assign(self.payload, { [field]: value });
      return self;
    },
    gt: (field, value) => {
      console.log('gt');
      Object.assign(self.payload, { [field]: { $gt: value } });
      return self;
    },
    gte: (field, value) => {
      console.log('gte');
      Object.assign(self.payload, { [field]: { $gte: value } });
      return self;
    },
    in: (field, value) => {
      console.log('in');
      if (typeof value !== 'object') throw '$in needs an array';
      Object.assign(self.payload, { [field]: { $in: value } });
      return self;
    },
    lt: (field, value) => {
      console.log('lt');
      Object.assign(self.payload, { [field]: { $lt: value } });
      return self;
    },
    lte: (field, value) => {
      console.log('lte');
      Object.assign(self.payload, { [field]: { $lte: value } });
      return self;
    },
    ne: (field, value) => {
      console.log('ne');
      Object.assign(self.payload, { [field]: { $ne: value } });
      return self;
    },
    nin: (field, value) => {
      console.log('nin');
      if (typeof value !== 'object') throw '$nin needs an array';
      Object.assign(self.payload, { [field]: { $nin: value } });
      return self;
    },
    /**
     * Logical Query Operators
     * See {@link https://docs.mongodb.com/manual/reference/operator/query-logical/}
     */
    not: (field, value) => {
      console.log('not');
      Object.assign(self.payload, { [field]: { $not: value } });
      return self;
    },
    get payload() {
      return self.payload;
    },
  });
};

module.exports = Query;
