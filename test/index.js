const chai = require('chai');
const should = chai.should(),
  expect = chai.expect;

const queryBuilder = require('../');
const find_json = require('./samples/task.read.json');

const base = queryBuilder()
  .database('app')
  .collection('Todos');

describe('MongoClient.find patterns', () => {
  // it('can set the database', () => {})
  // it('can set the collection', () => {})

  it('basic query', () => {
    const basic_find = base.find({}).value();

    expect(basic_find).to.be.an('object');

    expect(basic_find).to.have.all.keys(
      'database',
      'collection',
      'type',
      'payload'
    );

    expect(basic_find.database, 'find [database]').to.be.equal('app');
    expect(basic_find.collection, 'find [collection]').to.be.equal('Todos');
    expect(basic_find).to.deep.own.include(find_json.basic);
  });

  it('basic query with limit', () => {
    const query_limit = base
      .find({})
      .limit(3)
      .value();
    expect(query_limit.payload.limit).to.be.equal(3);
  });

  it('should be able to filter', () => {
    const query_filter = base
      .find()
      .filter({ name: 'test' })
      .value();
    expect(query_filter.payload.filter.name).to.be.equal('test');
  });

  it('should be able to skip', () => {
    const query_skip = base
      .find({})
      .skip(5)
      .value();
    expect(query_skip.payload.skip).to.be.equal(5);
  });

  it('should be able to sort the objects', () => {
    const query_sort = base
      .find({})
      .sort({ id: -1 })
      .all()
      .value();
    expect(query_sort.payload).to.deep.own.include({
      sort: {
        id: -1,
      },
    });
  });
});
