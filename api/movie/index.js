var instance = require('./instance');
var util = require('../util');

var convertRESTAPI = util.convertRESTAPI;


  function fetchTop250(opts) {
    opts.method = 'GET';
     opts.url='/top250' ;
    return instance(opts);
}


  function fetchComingSoon(opts) {
    opts.method = 'GET';
     opts.url='/coming_soon' ;
    return instance(opts);
}


  function fetchInTheaters(opts) {
    opts.method = 'GET';
     opts.url='/in_theaters' ;
    return instance(opts);
}

 module.exports= {
  fetchTop250 ,
  fetchComingSoon ,
  fetchInTheaters 
};
