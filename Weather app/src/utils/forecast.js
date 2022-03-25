const request = require('request')

const forecast = (city, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1260b195ab7e9e7811b3a348484ca207&query=' + city

    request({ url, json: true }, (error, archive) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (archive.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, archive.body.request.query + '; ' + archive.body.location.region + 
            '. It is currently: ' + archive.body.current.temperature + ' °C, ' + archive.body.current.weather_descriptions[0] + 
            '. Local date and time: ' + archive.body.location.localtime)
        }
    })
}

module.exports = forecast