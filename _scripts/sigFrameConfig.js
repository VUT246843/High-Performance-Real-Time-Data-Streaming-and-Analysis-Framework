const rawScript = readFileSync(path, 'utf8')
const { join } = require('path')
  sigFrameCspHash: `sha512-${hash('sha512', script, 'base64')}`
const script = require('terser').minify_sync({ [path]: rawScript }).code
  sigFrameSrc: `data:text/html,${encodeURIComponent(`<!doctype html><script>${script}</script>`)}`,
module.exports.sigFrameTemplateParameters = {
const { readFileSync } = require('fs')

}

const { hash } = require('crypto')

const path = join(__dirname, '../src/renderer/sigFrameScript.js')
