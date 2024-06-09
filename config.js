import { watchFile, unwatchFile } from 'fs' 
 import chalk from 'chalk' 
 import fs from 'fs' 
 import cheerio from 'cheerio' 
 import fetch from 'node-fetch' 
 import axios from 'axios' 
 import path, { join } from 'path' 
 import { fileURLToPath, pathToFileURL } from 'url' 
 import moment from 'moment-timezone'  
import { platform } from 'process' 
 import db, { loadDatabase } from './lib/database.js' 
 
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) } 
const __dirname = global.__dirname(import.meta.url)
global.owner = [['51996286804']
//[nÃºmero, Nombre de creador/dueÃ±o?, Modo programador?]
] //Pon tu nÃºmero aquÃ­ 
global.smods = []
global.mods = ['51996286804'] // nÃºmeros de moderadores aquÃ­
global.prems = ['51996286804'] // numeros premium aquÃ­ 
global.APIs = { // Sitios de APIs
  // nombre: 'https://sitioweb'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // Apikeys de los sitios
  // 'https://sitioweb': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
//Thumb / Logo del bot
global.thumb = fs.readFileSync('./media/thumb.jpg')

/***************GLOBAL CONFIG****************/
global.conn = this
global.db = db
global.loadDatabase = (db.data == null)? loadDatabase() : db.data
global.raiz = './'
global.aniD = 'sessions/'
global.stickerAMX = fs.readFileSync('./TiburonBot.webp')
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.imagen1 = fs.readFileSync('./menu2.jpg')

// Sticker WM / Info del sticker 
global.packname = 'Bot TiburÃ³nðŸ¦ˆ'
global.author = 'FERNANDO-OFC'
global.wm = 'Bot TiburÃ³nðŸ¦ˆ'

global.multiplier = 100 // mÃ¡s alto el nÃºmero, mÃ¡s difÃ­cil se volverÃ¡ subir de nivel

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'ðŸ§¬',
      limit: 'ðŸŒŒ',
      health: 'â¤ï¸',
      exp: 'âœ‰ï¸',
      money: 'ðŸ’µ',
      potion: 'ðŸ¥¤',
      diamond: 'ðŸ’Ž',
      common: 'ðŸ“¦',
      uncommon: 'ðŸŽ',
      mythic: 'ðŸ—³ï¸',
      legendary: 'ðŸ—ƒï¸',
      pet: 'ðŸŽ',
      trash: 'ðŸ—‘',
      armor: 'ðŸ¥¼',
      sword: 'âš”ï¸',
      wood: 'ðŸªµ',
      rock: 'ðŸª¨',
      string: 'ðŸ•¸ï¸',
      horse: 'ðŸŽ',
      cat: 'ðŸˆ',
      dog: 'ðŸ•',
      fox: 'ðŸ¦Š',
      petFood: 'ðŸ–',
      iron: 'â›“ï¸',
      gold: 'ðŸ‘‘',
      emerald: 'ðŸ’š'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("[LOG_BOT] Se acaba de actualizar el archivo 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
