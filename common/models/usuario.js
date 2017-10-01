'use strict';

const CLIENT_ID = 'd5feac3fdbd94767ac1c799195bdcca3'
const CLIENT_SECRET = '81aa171afe2e42ad9b826677f6a2968a'
const SpotifyApi = require('node-spotify-api')
const Spotify = new SpotifyApi({id: CLIENT_ID, secret: CLIENT_SECRET})

module.exports = function(Usuario) {

  // Spotify Logic
  Usuario.getSpotifyKey = cb => {
    Spotify.search({type: 'album', query: 'Malina'}, (err, data) => {
      if (err) return cb(err)
      return cb(null, data)
    })
  }

  Usuario.remoteMethod('getSpotifyKey', {returns: {arg: 'res', type: 'object'}})

};
