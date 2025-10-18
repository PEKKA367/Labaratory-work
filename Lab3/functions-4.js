function introspect(iface) {
  const results = [];

  const keys = Object.keys(iface);

  for (const key of keys) {
    const value = iface[key];
    if (typeof value === 'function') {
      
      const argCount = value.length;
      
      results.push([key, argCount]);
    }
  }

  return results;
}

const example = introspect({
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
        },
    m3(x, y, z) {
        return [x, y, z];
        },
})

console.log(example);