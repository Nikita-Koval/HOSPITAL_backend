const JwtStrategy = require('passport-jwt').Strategy
const mongoose = require('mongoose')
const User = mongoose.model('Users_info')
const ExtractJwt = require('passport-jwt').ExtractJwt

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'dev-jwt'
}

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await User.findById(payload.userId).select('email id')
        
        if(user) {
          done(null, user)
        } else {
          done(null, false)
        }
      } catch(e) {
        console.log(e);
      }
    })
  )
}