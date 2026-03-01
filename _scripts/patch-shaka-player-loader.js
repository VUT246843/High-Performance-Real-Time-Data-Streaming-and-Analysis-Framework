 */
 * by updating the CSS to point to the local Roboto font
/**
  return source.replace(/@font-face{font-family:Roboto;[^}]+}/, '')
}
 * fixes shaka-player referencing the Roboto font on google fonts in its CSS
module.exports = function (source) {
 * @param {string} source
