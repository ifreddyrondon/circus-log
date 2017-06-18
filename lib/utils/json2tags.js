/**
 * Check if the param is an object
 * @param obj
 * @return {boolean}
 */
function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Convert json to tags string format
 */
function json2tags(tags = {}) {
  return Object.keys(tags)
    .map((key) => {
      if (isObject(tags[key])) {
        return `[${key}: ${json2tags(tags[key])}]`;
      }
      return `[${key}:${tags[key]}]`;
    })
    .join(' ');
}

/**
 * Expose json2tags
 */
module.exports = json2tags;
