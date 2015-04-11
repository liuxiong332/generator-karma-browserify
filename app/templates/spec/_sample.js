'use strict';

describe('external', function() {
  it('should access non-commonJS library', function() {
    <% if(testFramework === 'jasmine') { %>
    expect('hello').toEqual('hello');
    <% } else if (testFramework === 'mocha') { %>
    var should = require('should');
    'hello'.should.equal('hello');
    <% } %>
  });
});
