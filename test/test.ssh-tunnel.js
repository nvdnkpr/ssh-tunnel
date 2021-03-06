/**
 * Module dependencies.
 */

var program = require('commander')
  , prompt = require('prompt')
  , colors = require('colors')  
  , should = require('should')
  , assert = require('assert')
  , proxyquire = require('proxyquire');

// create stub for user inputs *
var appstub = {
  init: function(options){ 
    return true; 
  }
};

// load application w/ stub modules
var tunnel = proxyquire(__dirname+'/../lib/index', { './app': appstub });

// run tests
assert.equal(tunnel.load({}), true);
