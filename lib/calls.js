var defaults = require('defaults');

module.exports = Calls;

function Calls(API) {
  this.API = API;
};

Calls.prototype.list = function(callback, options) {
  options = defaults(options, {
    page: 1, // Pagination for list of objects
    per_page: 50, // Number of objects fetched per request
    order: 'asc', // Reorder entries per creation date, asc or desc
  });

  this.API.get('/calls', options, callback);
};

Calls.prototype.get = function(id, callback, options) {
  this.API.get('/calls/' + id, options, callback);
};

Calls.prototype.link = function(id, link, callback, options) {
  options = defaults(options, {
    link: link
  });

  this.API.post('/calls/' + id +'/link', options, callback);
};
