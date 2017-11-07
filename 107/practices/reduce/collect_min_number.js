'use strict';

function collect_min_number(collection) {
  return Math.min.apply(Math,collection);
}

module.exports = collect_min_number;

