const express = require('express')
let app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()
var mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.REACT_APP_GMAIL_USER,
    pass: process.env.REACT_APP_GMAIL_PASS
  }
})

app.use(cors())
app.use(express.json())

app.post('/book', (req, res, next) => {
    console.log(req.body)
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var email = req.body.email
    var guestCount = req.body.guestCount
    var level = req.body.level

    mailer.sendMail({
        from: process.env.REACT_APP_GMAIL_USER,
        to: process.env.REACT_APP_CLIENT_EMAIL,
        subject: `New booking from ${firstName} ${lastName}`,
        text: (level == 1 ? `${firstName} ${lastName} has booked a New Player Intro session with ${guestCount} other(s).
         They can be contacted at ${email}` : 
         `${firstName} ${lastName} has booked an Up Your Game session with ${guestCount} other(s).
         They can be contacted at ${email}`)
      }, (err, info) => {
        if (err) {
          res.json({status: 'error'})
        } else {
          res.json({
              status: 'success',
              data: info.response
          })
        }
      })
})

app.listen(5000, () => console.info('Backend Server is live on port 5000'))