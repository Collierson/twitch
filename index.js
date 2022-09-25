const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

///client.on('connected', () => {
///    client.say(channel, `機器人已上線(無害放百顆心)`);
///});

client.on('message', (channel, user, message, self) => {
    if(self) return;

    if(message == '安安') {
        client.say(channel, `@${user.username}, 安安 abc970Roar `);
    }
    if(message == '早安') {
        client.say(channel, `@${user.username}, 早安 abc970Roar `);
    }
    if(message == '午安') {
        client.say(channel, `@${user.username}, 午安 abc970Roar `);
    }
    if(message == '晚安') {
        client.say(channel, `@${user.username}, 晚安 abc970Roar `);
    }
    if(message == '各位88') {
        client.say(channel, `@${user.username}, 88~ abc970Roar `);
    }
    if(message == '各位掰掰') {
        client.say(channel, `@${user.username}, 掰掰~ abc970Roar `);
    }
    if(message == '各位拜拜') {
        client.say(channel, `@${user.username}, 拜拜~ abc970Roar `);
    }
    if(message == '毛絨好帥') {
        client.say(channel, `謝謝，我知道 StinkyGlitch `);
    }
    if(message == '西帥是我的') {
        client.say(channel, ` 西帥都偷偷來的(? LUL `);
    }
    if(message == '!學士') {
        client.say(channel, ` 要玩3v3嗎 StinkyGlitch `);
    }
    if(message == '!八宗') {
        client.say(channel, ` 你現在在D哪一台啊 StinkyGlitch `);
    }
    if(message == '!月璃') {
        client.say(channel, ` 謝謝領養我 LUL `);
    }
    if(message == '!滴叩') {
        client.say(channel, ` 所以你真的在邊XX邊看我們聊天 StinkyGlitch `);
    }
    if(message == '!八代軒') {
        client.say(channel, ` 我還是想不到要寫甚麼。 BibleThump  `);
    }
    if(message == '!嘎嘎') {
        client.say(channel, ` 484在潛水D其他台 StinkyGlitch `);
    }
    if(message == '!泡芙') {
        client.say(channel, ` 要跟學士玩遊戲嗎 LUL `);
    }
    if(message == '!三皮') {
        client.say(channel, ` 最愛三皮了，竹子第二 abc970Laydown `);
    }
    if(message == '!艾蘇') {
        client.say(channel, ` 我猜艾蘇在玩飢荒 abc970Laydown `);
    }
    if(message == '!多多') {
        client.say(channel, `要開台嗎 StinkyGlitch `);
    }
    if(message == '!吸貓') {
        client.say(channel, `可以吸貓以外的動物嗎 StinkyGlitch `);
    }
    if(message == '!菓子') {
        client.say(channel, `今天揪團我想要... abc970Laydown  `);
    }
    if(message == '!巫師') {
        client.say(channel, `你會魔法嗎 StinkyGlitch  `);
    }
    if(message == '!摩斯') {
        client.say(channel, `你是漢堡嗎 StinkyGlitch  `);
    }
    if(message == '!竹子') {
        client.say(channel, `竹子教。教主 StinkyGlitch `);
    }
    if(message == '!彩蛋') {
        client.say(channel, `你怎麼發現的?(咬著竹子的二哈吸血鬼，看到月亮會變身為蝙蝠) LUL `);
    }
    if(message == '!骰子') {
        client.say(channel, `@${user.username} 骰出 ${Math.floor(Math.random() * 6) + 1}!`);
    }
});