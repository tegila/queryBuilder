const logger = process.env.DEBUG ? console.log : () => null;

let payload = {};

const payload_stringfy = payload => {
  return JSON.stringify(payload);
};

const payload_parse = payload => {
  return JSON.parse(payload);
};

/**
 * Aggregation Pipeline Stages
 * See {@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/}
 */
const Aggregation = () => ({
  sort: sort => {
    logger("sort");
    const field = Object.keys(sort)[0];
    const value = Object.values(sort)[0];
    payload = Object.assign({}, payload, { $sort: { [field]: value } });
    return Find(query);
  },
  limit: number => {
    logger("limit");
    payload = Object.assign({}, payload, { $limit: number });
    return Find(query);
  },
  skip: number => {
    logger("skip");
    payload = Object.assign({}, payload, { $skip: number });
    return Find(query);
  },
  get value() {
    payload.nonce = Math.random();
    return JSON.stringify(payload);
  }
});
