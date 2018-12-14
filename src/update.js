let payload = {};

const Update = (transaction) => {
  /** Field Update Operators */
  return self = {
    currentDate: (field, value) => {
      console.log(transaction);
      console.log('currentDate');
      if (typeof value === 'boolean' && value) {
        Object.assign(transaction.payload.update, { $currentDate: { [field]: value }});
      } else {
        Object.assign(transaction.payload.update, {
          $currentDate: { field: { $type: value.toLowerCase() }}
        });
      }
      return self;
    },
    increment: (field, value) => {
      console.log('increment');
      Object.assign(transaction.payload.update, { $inc: { [field]: value } });
      return self;
    },
    min: (field, value) => {
      console.log('min');
      Object.assign(transaction.payload.update, { $min: { [field]: value } });
      return self;
    },
    max: (field, value) => {
      console.log('min');
      Object.assign(transaction.payload.update, { $max: { [field]: value } });
      return self;
    },
    multiplay: (field, value) => {
      console.log('multiplay');
      Object.assign(transaction.payload.update, { $mu: { [field]: value } });
      return self;
    },
    rename: (field, value) => {
      console.log('rename');
      Object.assign(transaction.payload.update, { $rename: { [field]: value } });
      return self;
    },
    set: (field, value) => {
      console.log('set');
      Object.assign(transaction.payload.update, { $set: { [field]: value } });
      return self;
    },
    setOnInsert: (field, value) => {
      console.log('setOnInsert');
      Object.assign(transaction.payload.update, { $setOnInsert: { [field]: value } });
      Object.assign(transaction.payload.options, { upsert: true });
      return self;
    },
    unset: (field) => {
      console.log('unset');
      Object.assign(transaction.payload.update, { $unset: { [field]: '' } });
      return self;
    },
    /** Array Update Operators */
    addToSet: (field, value) => {
      console.log('addToSet');
      Object.assign(transaction.payload.update, { $addToSet: { [field]: value } });
      return self;
    },
    pop: (obj) => {
      console.log('pop');
      const field = Object.keys(obj).shift();
      const value = Object.values(obj).shift();
      Object.assign(transaction.payload.update, { $pop: { [field]: value } });
      return self;
    },
    pull: (obj) => {
      console.log('pull');
      const field = Object.keys(obj).shift();
      const value = Object.values(obj).shift();
      Object.assign(transaction.payload.update, { $pull: { [field]: value } });
      
      return self;
    },
    getPayload: () => {
      return transaction;
    }
  }
};

module.exports = Update;
