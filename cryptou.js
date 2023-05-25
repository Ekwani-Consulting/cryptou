/**
 * cryptou | MIT license | https://github.com/Ekwani-Consulting/cryptou
 *  UMD Crypto library (supports AMD, Node, CommonJS, modulejs, YUI, and browsers)
 *
 * Public Methods:
 *
 * version
 * @returns {String} cryptou version
 *
 * random
 * @param {Integer} size - in bytes; default = 32
 * @returns {Uint8Array} random entropy in specified byte size
 *
 * ***********************************************************************************************
 * Sources:
 *
 * ClientRandom                         | MIT license       | https://github.com/verifyprovablyfair/ClientRandom
 * fid-umd                              | MIT license       | https://github.com/fidian/fid-umd
 * UMD (Universal Module Definition)    | MIT license       | https://github.com/umdjs/umd
 *
 * ***********************************************************************************************
 */
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

  function version() {
    return "0.1.0";
  }

  /*
   * ***********************************************************************************************
   *
   * Random Number Generator
   *    forked from https://github.com/verifyprovablyfair/ClientRandom/blob/master/ClientRandom.js
   *
   * ***********************************************************************************************
   */
  function genrand() {
    var rng_nums = new Uint32Array(2);
    if (
      typeof window === "object" &&
      window.crypto &&
      window.crypto.getRandomValues
    )
      window.crypto.getRandomValues(rng_nums); // Chrome, Opera, Firefox
    else if (
      typeof window === "object" &&
      window.msCrypto &&
      window.msCrypto.getRandomValues
    )
      window.msCrypto.getRandomValues(rng_nums); // IE
    else
      rng_nums = [
        Math.floor(Math.random() * 4294967295),
        Math.floor(Math.random() * 4294967295),
      ]; // All outdated browsers
    return (rng_nums[0] >>> 5) * 67108864.0 + (rng_nums[1] >>> 6);
  }

  function random(size = 32) {
    const block = [];
    for (let i = 0; i < size; i++) {
      block.push(genrand());
    }
    return new Uint8Array(block);
  }

  /*
   * ***********************************************************************************************
   *
   * Expose Public Methods
   *
   * ***********************************************************************************************
   */
  return {
    version: version,
    random: random,
  };
});
