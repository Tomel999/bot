const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'acmc.pl',
  username: 'tomelafk2',
  auth: 'offline',
  version: '1.18.2'
})

bot.on('login', () => {
  bot.chatAddPattern(/^\[Server\] (?:\w+) has logged in\.$/, 'login', 'Login message')
  bot.chat('/login tomel999');
  console.log('zalogowano')
})
bot.once("spawn", () => {
  bot.setQuickBarSlot(1)
  bot.activateItem()
  })
  bot.on('windowOpen', (window) => {
  console.log('window open')
  console.log(window.slots)
  bot.clickWindow(13,0,0)
  })
  
  bot.on('windowClose', (window) => {
  console.log('window closed')
  })
  bot.on('windowClose', () => {
    setInterval(() => {
      bot.chat('/sellall')
      console.log('money')
    }, 5000)
  })
bot.on('error', (e) => { console.log('wyjebalem sie pozdro ' + e) });
