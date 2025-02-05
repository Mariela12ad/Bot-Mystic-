import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let mssg = {
    notext: 'No proporcionaste texto',
    example: 'Ejemplo: *' + usedPrefix + command + '* Hola'
  }

  if (!text) throw `✳️ _${mssg.notext}_\n\n📌${mssg.example}`

  let stiker = await sticker(null, global.API('fgmods', '/api/maker/attp', { text }, 'apikey'), global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  throw stiker.toString()
}

handler.help = ['attp <text>']
handler.tags = ['sticker']
handler.command = ['attp']

export default handler
