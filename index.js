const config = require('./config.js')

const fs = require('fs')

const Mastodon = require('mastodon-api')

const M = new Mastodon({
  access_token: config.mastadon_access_token,
  api_url: config.mastadon_api_url
})

const tootMedia = function(file) {
    return new Promise((resolve, reject) => {
        if(file) {
            M.post('media', { file: fs.createReadStream(file) }).then(resp => {
                resolve(resp.data.id)
            })
        } else {
            resolve()
        }
    })
}

const toot = function(status, media) {
    return new Promise((resolve, reject) => {
        tootMedia(media).then(media_id => {
            let statusOpts = {
                status: status
            }
            if(media_id) {
                statusOpts.media_ids = [media_id]
            }
            M.post('statuses', statusOpts, function(err, t){
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
    })
}

toot(
    process.argv[2] || config.toot_status,
    process.argv[3] || config.toot_media
).then(t => {
    process.exit(0)
})