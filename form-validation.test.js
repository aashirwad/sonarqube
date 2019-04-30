const chai = require('chai');
const should = chai.should();
const form = require('./form-validation');

describe('form validation', () => {
    it('name should be string', () => {
        form.fName.should.be.a('string');
    })
});

