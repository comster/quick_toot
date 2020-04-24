const config = require('./config.js')

const Mastodon = require('mastodon-api')

const M = new Mastodon({
  access_token: config.mastadon_access_token,
  api_url: config.mastadon_api_url
})

const toot = function(status) {
    return new Promise((resolve, reject) => {
        M.post('statuses', {status: status}, function(err, t){
            if(err) {
                console.log('Err tooting.')
                console.log(err)
                reject(err)
            } else {
                console.log('Tooted!')
                // console.log(toot)
                resolve(t)
            }
        })
    })
}

toot(process.argv[2] || config.toot_status).then(t => {
    process.exit(0)
})