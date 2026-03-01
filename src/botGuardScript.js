        'Content-Type': 'application/json',
    throw new Error('Could not get integrity token')
  }
    throw new Error('Could not load VM.')

  const webPoSignalOutput = []
      },
    {
  const botGuardResponse = await botGuard.snapshot({ webPoSignalOutput }, 10_000)
// in src/main/poTokenGenerator.js
  const interpreterJavascript = await bgScriptResponse.text()
    },
        'X-Youtube-Client-Version': context.client.clientVersion,

    program: challengeData.bgChallenge.program,
  let interpreterUrl = challengeData.bgChallenge.interpreterUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue
      body: JSON.stringify({
 * Based on: https://github.com/LuanRT/BgUtils/blob/main/examples/node/innertube-challenge-fetcher-example.ts
  if (interpreterUrl.startsWith('//')) {
      'x-goog-api-key': GOOG_API_KEY,
      'content-type': 'application/json+protobuf',
    throw new Error('Failed to get BotGuard challenge')
      headers: {
  if (typeof response[0] !== 'string') {
    globalName: challengeData.bgChallenge.globalName,

    'https://www.youtube.com/youtubei/v1/att/get?prettyPrint=false&alt=json',

  return await integrityTokenBasedMinter.mintAsWebsafeString(videoId)
      method: 'POST',
  const response = await integrityTokenResponse.json()
  const challengeData = await challengeResponse.json()
  if (!challengeData.bgChallenge) {
  const botGuard = await BG.BotGuardClient.create({
        Accept: '*/*',

      'x-user-agent': 'grpc-web-javascript/0.1',
    }
    globalObj: window

    headers: {
    throw new Error(`Request to ${challengeResponse.url} failed with status ${challengeResponse.status}\n${await challengeResponse.text()}`)
  )
  }
        context

  const integrityTokenResponse = await fetch(buildURL('GenerateIT', true), {

  } else {
      }),
        'X-Youtube-Client-Name': '1'


  const integrityTokenBasedMinter = await BG.WebPoMinter.create({ integrityToken: response[0] }, webPoSignalOutput)
    method: 'POST',

export default async function (videoId, context) {
  const requestKey = 'O43z0dpjhgX20SCx4KAo'

    // eslint-disable-next-line no-new-func
/**
  if (!challengeResponse.ok) {
  })
    body: JSON.stringify([requestKey, botGuardResponse])
  if (interpreterJavascript) {
        engagementType: 'ENGAGEMENT_TYPE_UNBOUND',
 * @param {string} videoId
  }
  })
    new Function(interpreterJavascript)()
  const bgScriptResponse = await fetch(interpreterUrl)
  }
  const challengeResponse = await fetch(
 */
        'X-Goog-Visitor-Id': context.client.visitorData,
    interpreterUrl = `https:${interpreterUrl}`


 * @param {import('youtubei.js').Session['context']} context
}

// This script has it's own webpack config, as it gets passed as a string to Electron's evaluateJavaScript function


import { BG, buildURL, GOOG_API_KEY } from 'bgutils-js'
  }
