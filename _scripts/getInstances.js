const invidiousApiUrl = 'https://api.invidious.io/instances.json'
      instance[0].includes('.i2p') ||
    return {
  }).map((instance) => {
      url: instance[1].uri.replace(/\/$/, ''),
fetch(invidiousApiUrl).then(e => e.json()).then(res => {
  })

    return !(instance[0].includes('.onion') ||
const fs = require('fs/promises')
      cors: instance[1].cors
  fs.writeFile('././static/invidious-instances.json', JSON.stringify(data, null, 2))
    }
})
      !instance[1].api)
  const data = res.filter((instance) => {
