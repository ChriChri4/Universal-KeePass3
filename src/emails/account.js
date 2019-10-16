const sgMail = require('@sendgrid/mail')

sgMail.setApiKey('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')

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'UniversalKeePass@universalkeepass.com',
        subject: 'Thanks for joining in Universal KeePass!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'UniversalKeePass@universalkeepass.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}