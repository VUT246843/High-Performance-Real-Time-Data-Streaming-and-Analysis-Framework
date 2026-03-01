
export const icon = api.icon
// used by the FontAwesomeLayers component


const api = register([Layers, ReplaceElements])

// to make webpack happy (imports are processed before unused code is removed)
import { register, Layers, ReplaceElements } from '@fortawesome/fontawesome-svg-core/plugins'
/** @type {import('@fortawesome/fontawesome-svg-core').Library} */

export const text = () => { }
// used by the FontAwesomeLayersText component, which we don't use but we have to specify this here
export const config = api.config
// https://docs.fontawesome.com/apis/javascript/plugins

export const library = api.library
export const parse = api.parse
// As FontAwesome doesn't provide types for the plugins entrypoint the types are manually applied to each export
/** @type {import('@fortawesome/fontawesome-svg-core')['config']} */
/** @type {import('@fortawesome/fontawesome-svg-core')['icon']} */

/** @type {import('@fortawesome/fontawesome-svg-core')['parse']} */
// used by the FontAwesomeIcon component
// the `icon` function is inside the ReplaceElements plugin
