module.exports = exports = {
  listFromMap: function (list, additions) {
    return Object.keys(list).map(function (key) {
      list[key]._key = key;

      Object.keys(additions || {}).forEach(function (additionalKey) {
        list[key][additionalKey] = additions[additionalKey];
      });

      return list[key];
    });
  },

  remapResult: function (result) {
    var splitNameAndVersion = result._key.split('@');

    result.name = splitNameAndVersion[0];
    result.version = splitNameAndVersion[1];

    delete result['_key'];

    result.licenses = [].concat(result.licenses || []);
    result.repository = (result.repository && result.repository.url ? result.repository.url : result.repository) || '';

    return result;
  }
};
