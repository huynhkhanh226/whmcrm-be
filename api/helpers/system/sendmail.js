const nodemailer = require("nodemailer");
module.exports = {

  friendlyName: 'Sendmail',
  description: 'Sendmail system.',

  inputs: {
    to: {
      type: "string",
      required: true
    },
    subject: {
      type:"string",
      required: true
    },
    content: {
      type: "string",
    },
  },

  fn: async function (inputs) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      //host: "smtp.ethereal.email",
      host: sails.config.mail.mailServer,
      port: sails.config.mail.port,
      secure: sails.config.mail.secure, // true for 465, false for other ports
      auth: {
        user: sails.config.mail.username, // generated ethereal user
        pass: sails.config.mail.password, // generated ethereal password
      },
    });

    // send mail with defined transport object
    return await transporter.sendMail({
      from: '"VNDEVHOST 👻"' + sails.config.mail.sender, // sender address
      to: inputs.to, // list of receivers
      subject: inputs.subject + " ✔", // Subject line
      text: inputs.content, // plain text body
      html: "<b>" + inputs.content + "</b>", // html body
    });

    //console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
};

