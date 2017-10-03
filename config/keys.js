//keys.js-figure out what set of credential to return
if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys !!!
    module.exports= require('./dev');
}
module.exports={
    googleClientID:'639404125847-dneqfb939fbkv09avn5tsav9dfqtf39k.apps.googleusercontent.com',
    googleClientSecret:'xgPH7-V38hJB1jNEb8QgPvGi',    mongoLocalUri:'mongodb://username:sent2160@ds161584.mlab.com:61584/ecoapp',
    cookieKey: 'jhjfdhhjdhfuhrurhjksjhuhduhjhjdfh'
};