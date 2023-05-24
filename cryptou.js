(function (name, root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node
    module.exports = factory();
  } else if (typeof exports === "object") {
    // CommonJS
    exports[name] = factory();
  } else if (typeof modulejs === "object") {
    // modulejs
    modulejs.define(name, factory);
  } else if (typeof YUI === "object") {
    // YUI
    YUI.add(name, function (Y) {
      Y[name] = factory();
    });
  } else {
    // browser globals
    root[name] = factory();
  }
})("cryptou", typeof self !== "undefined" ? self : this, function () {
  "use strict";
  const version = "0.1.0";

  // Exposed public methods
  return {
    version: version,
  };
});
