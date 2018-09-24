import Telegraf from "telegraf";

class MomusBot{

    public bot

    constructor( botToken : string ){

        const Telegraf = require('telegraf')

        this.bot = new Telegraf( botToken )

        this.bot.start((ctx) => ctx.reply('Welcome'))
        this.bot.help((ctx) => ctx.reply('Send me a sticker'))
        this.bot.on('sticker', (ctx) => ctx.reply('👍'))
        this.bot.hears('hi', (ctx) => ctx.reply('Hey there'))
        this.bot.hears('Игорек лалка?', (ctx) => ctx.reply('Еще какая))0)'))
        this.bot.hears('Когда будешь работать нормально?', (ctx) => ctx.reply('Ахаха, работать)0))'))
        this.bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))

        this.bot.startPolling()
    }

}
export default new MomusBot(  "697113317:AAH0l4NnH5tqpDvlsYJwET0WEFHPLxlfzWs" ).bot
