const lolcatjs = require('lolcatjs')
const figlet = require('figlet')

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

lolcatjs.fromString('[INFO] HI,I AM SAMURAI')
lolcatjs.fromString('[SYSTEM] STARTING BOT...')
console.log('------------------------------------------------')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('SAMURAI V4', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'Bot samurai v4\' By samurai', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
console.log('------------------------------------------------')

function start() {
  let args = [path.join(__dirname, 'nzwa.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
console.log('------------------------------------------------')
lolcatjs.fromString('[REB] SAMURAI')