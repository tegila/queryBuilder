const logger = process.env.DEBUG ? console.log : null;

const UpdateOps = () => {
  /** Field Update Operators */
  return self = {
    currentDate: (field, value) => {
      logger(transaction);
      logger('currentDate');
      if (typeof value === 'boolean' && value) {
        Object.assign(self.ops, { $currentDate: { [field]: value }});
      } else {
        Object.assign(self.ops, {
          $currentDate: { field: { $type: value.toLowerCase() }}
        });
      }
      return self;
    },
    increment: (field, value) => {
      logger('increment');
      Object.assign(self.ops, { $inc: { [field]: value } });
      return self;
    },
    min: (field, value) => {
      logger('min');
      Object.assign(self.ops, { $min: { [field]: value } });
      return self;
    },
    max: (field, value) => {
      logger('min');
      Object.assign(self.ops, { $max: { [field]: value } });
      return self;
    },
    multiplay: (field, value) => {
      logger('multiplay');
      Object.assign(self.ops, { $mu: { [field]: value } });
      return self;
    },
    rename: (field, value) => {
      logger('rename');
      Object.assign(self.ops, { $rename: { [field]: value } });
      return self;
    },
    set: (field, value) => {
      logger('set');
      Object.assign(self.ops, { $set: { [field]: value } });
      return self;
    },
    setOnInsert: (field, value) => {
      logger('setOnInsert');
      Object.assign(self.ops, { $setOnInsert: { [field]: value } });
      Object.assign(transaction.payload.options, { upsert: true });
      return self;
    },
    unset: (field) => {
      logger('unset');
      Object.assign(self.ops, { $unset: { [field]: '' } });
      return self;
    },
    /** Array Update Operators */
    addToSet: (field, value) => {
      logger('addToSet');
      Object.assign(self.ops, { $addToSet: { [field]: value } });
      return self;
    },
    pop: (obj) => {
      logger('pop');
      const field = Object.keys(obj).shift();
      const value = Object.values(obj).shift();
      Object.assign(self.ops, { $pop: { [field]: value } });
      return self;
    },
    pull: (obj) => {
      logger('pull');
      const field = Object.keys(obj).shift();
      const value = Object.values(obj).shift();
      Object.assign(self.ops, { $pull: { [field]: value } });
      
      return self;
    },
    value: () => {
      return transaction;
    }
  }
};

module.exports = UpdateOps;
