const nodemailer = require('nodemailer');

async function handleMail(req, res) {

    try {
      const { description ,mail } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.fromMail, // Replace with your email
        pass: process.env.PASS , // Replace with your email password
      },
    });

    // Email options
    const mailOptions = {

      from: process.env.fromMail , // Replace with your email
      to: mail , // Replace with the recipient's email
      subject: "Sending Email using Node.js",
      text: description,
      attachments:[
        {
            filename:"text1.txt",
            content:"Hello World",
        }
      ]
    };

    // Send email and await the result
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    // Respond with success
    return res.status(200).json({
      msg: "Email sent successfully",
      status: "T",
      data: info.response,
    });

  } catch (error) {
    console.error("Error sending email:", error);

    // Respond with failure
    return res.status(500).json({
      msg: "Failed to send email",
      status: "F",
      data: error.message, // Sending error message in response
    });
  }
}

module.exports = {
    handleMail,

}
