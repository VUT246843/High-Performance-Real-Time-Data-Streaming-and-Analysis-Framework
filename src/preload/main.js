import { contextBridge } from 'electron/renderer'
contextBridge.exposeInMainWorld('ftElectron', api)

import api from './interface.js'
