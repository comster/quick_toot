# Quick toot!

Use this script to quickly send a toot to your favorite mastadon instance.

## Requires

- [NodeJs](https://nodejs.org/en/)

## Install

Download or clone this git repo to a folder on your computer.

- [Download](https://github.com/comster/quick_toot/archive/master.zip) and unzip
- Clone with: `git clone git@github.com:comster/quick_toot.git`

## Configure

Open config.js and set the following values:

- `mastadon_api_url`: the URL of your mastadon instance API endpoint like "https://mastodon.social/api/v1/"
- `mastadon_access_token`: the app access token for the account you want to toot as (see below)
- `toot_status`: the default toot status text to send

### How to obtain your mastadon account access token

- Go to your Settings > Development > New Application page: https://noagendasocial.com/settings/applications/new
- Enter an Application Name
- Click Submit
- Click on your new application name
- Copy the value of "Your access token"
- Paste it into your config.js as the value of `mastadon_access_token`

## Run

Examples of how to run the script:

- `node index.js`
- `node index.js "This is my toot!"`
- `npm start`
- `npm start "Toot toot!"`

You might want to run this by [using a hotkey](https://stackoverflow.com/questions/39512375/is-there-any-way-to-create-an-shortcut-desktop-to-a-node-js-npm-application).
