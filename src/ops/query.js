const logger = process.env.DEBUG ? console.log : () => null;
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
      logger('eq');
      Object.assign(self.payload, { [field]: value });
      return self;
    },
    gt: (field, value) => {
      logger('gt');
      Object.assign(self.payload, { [field]: { $gt: value } });
      return self;
    },
    gte: (field, value) => {
      logger('gte');
      Object.assign(self.payload, { [field]: { $gte: value } });
      return self;
    },
    in: (field, value) => {
      logger('in');
      if (typeof value !== 'object') throw '$in needs an array';
      Object.assign(self.payload, { [field]: { $in: value } });
      return self;
    },
    lt: (field, value) => {
      logger('lt');
      Object.assign(self.payload, { [field]: { $lt: value } });
      return self;
    },
    lte: (field, value) => {
      logger('lte');
      Object.assign(self.payload, { [field]: { $lte: value } });
      return self;
    },
    ne: (field, value) => {
      logger('ne');
      Object.assign(self.payload, { [field]: { $ne: value } });
      return self;
    },
    nin: (field, value) => {
      logger('nin');
      if (typeof value !== 'object') throw '$nin needs an array';
      Object.assign(self.payload, { [field]: { $nin: value } });
      return self;
    },
    /**
     * Logical Query Operators
     * See {@link https://docs.mongodb.com/manual/reference/operator/query-logical/}
     */
    not: (field, value) => {
      logger('not');
      Object.assign(self.payload, { [field]: { $not: value } });
      return self;
    },
    get payload() {
      return self.payload;
    },
  });
};

module.exports = Query;
