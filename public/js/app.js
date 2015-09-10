(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
  "use strict";
  
  var $ = window.$,
    CountriesTableView = require('./views/CountriesTable');
  
  $(function () {
    $('body').append(new CountriesTableView().render().el);
  });
  
}());
},{"./views/CountriesTable":3}],2:[function(require,module,exports){
module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr>  \n  <td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias3(((helper = (helper = helpers.capital || (depth0 != null ? depth0.capital : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"capital","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>  \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table>\n<tr>  \n  <th>Country</th>\n  <th>Capital</th>\n  <th>Region</th>\n</tr>  \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</table>";
},"useData":true});
},{}],3:[function(require,module,exports){
(function () {
  "use strict";

  var TableView = require('./Table'),
    template = require('../templates/countries-table');

  module.exports = TableView.extend({

    render: function () {
      var rows = [ {
        name: 'Austria',
        capital: 'Vienna',
        region: 'Europe'
      }, {
        name: 'Belarus',
        capital: 'Minsk',
        region: 'Europe'
      }, {
        name: 'Barbados',
        capital: 'Bridgetown',
        region: 'North America'
      }, {
        name: 'Micronesia',
        capital: 'Palikir',
        region: 'Oceania'
      }];

      this.$el.html(template({rows: rows}));

      return this;
    }

  });

}());
},{"../templates/countries-table":2,"./Table":4}],4:[function(require,module,exports){
(function () {
  "use strict";

  var Backbone = window.Backbone;

  module.exports = Backbone.View.extend({

    tagName: 'table'

  });

}());
},{}]},{},[1])