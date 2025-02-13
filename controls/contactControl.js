const ContactUser = require('../users/contactUser');
const outlookEmail = 'skylinebuilders101@outlook.com'
const transporter2 = require('../utils/emailConfig');
const myEmail = 'patelterry75@gmail.com';
const submitContact = async (req, res) => {
    try {
        const { first, last, company, email, phone, message } = req.body;

        // Log request body to debug missing fields
        console.log(req.body);

        // Check for required fields
        if (!first || !last || !company || !email || !phone || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create user record
        const newUser = await ContactUser.create({
            first,
            last,
            company,
            email,
            phone,
            message
        });
       

        // Compose email options
        const mailOptions = {
            from: 'Skyline Builders, LLC <skylinebuilders101@outlook.com>',
            to: email,
            bcc: [
                { name: 'Skyline Builders, LLC', address: myEmail },
                { name: 'Skyline Builders, LLC', address: outlookEmail }
                 
            ],
            subject: `SKYLINE BUILDERS LLC CONTACT MESSAGE FROM ${first} ${last}`,
            html: `
           <!DOCTYPE html>
            <html lang="en">
                    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #e7e7e7;">
                <form style="background-color: #e7e7e7; flex-direction: column; align-items: center; justify-content: center;" action="#" method="post">
                    <header style="background-color:rgb(255, 0, 0)">
                    <h2 style="margin-top: 20px;
                    font-size: 50px;
                    text-align: center;
                    font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                    color:#000000;"
                    >Skyline Builders, LLC</h2>
                    </header>
                   
                    <h2 style="margin-top: 20px;
                    font-size: 47px;
                    text-align: center;
                    font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                    color:#000000;"
                    >MESSAGE FROM THE CONTACT FORM</h2>
                            <div style="margin-bottom: 15px;">
                        <h1 style="margin-top: 10px;
                                    font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Dear ${first},</h1>
                        <h1 style="margin-top: 5px;
                            font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Your message has been received successfully! We will be with you within 48 hours!</h1>
                        
                        <h1 style="
                        color:#000000;
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 40px;
                        font-size: 60px;
                        ">Contact Info:</h1>
        
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        ">First Name: <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${first}</p></p>
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        ">Last Name: <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${last}</p></p>
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        ">Company: <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${company}</p></p>
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        ">Email: <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${email}</p></p>
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        ">Phone: <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${phone}</p></p>
        
                        <p style="
                        color:#000000;
                        font-family: 'Kairos W04 Extended Bold';
                        font-style: normal;
                        margin-top: 40px;
                        font-size: 60px;
                        ">Message:</p>
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        "> <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${message}</p></p>
                        <h1 style="
                        margin-top: 80px;
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        line-height: 26px;
                        ">
                        At Skyline Builders LLC, we appreciate your trust in our services and value your inquiry.  
                        Our team is committed to providing prompt, reliable, and high-quality support to ensure your needs are met efficiently.  
                        Your time is important to us, and we will respond as quickly as possible to assist you. 
                        Thank you for choosing Skyline Builders LLC—we look forward to working with you!
</h1>
                        <h1 style="margin-top: 20px;
                                font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                                line-height: 26px;">
                                    Best Regards,</h1>
                        <h1 style="
                        font-size: 30px;
                        margin-top: 20px;
                        font-family: 'Kairos W04 Extended Bold, Arial, Helvetica, sans-serif;
                        line-height: 30px;
                        ">Terry Patel: (706) 844-5753</h1>
                        <div style="padding-top: 10px;">
                            <h3 style="
                            font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                            font-style: normal;
                            margin-top: 20px;
                            font-size: 40px;
                            color:#000000;
                            ">Contact Information:</h3>
                            <h1 style= "font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Terry Patel</h1>
                            <h1 style= "font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Skyline Builders, LLC</h1>
                            <h1 style= "font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >763 Hwy 53</h1>
                            <h1 style= "font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Calhoun, GA 30701</h1>
                            <h1 style= "font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Cell: (706) 844-5753</h1>
                            <h1 style= "font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;">Website: <a href="https://www.skylinebuildersgallc.com">www.skylinebuildersgallc.com</a></h1>
                        </div>
                        </div>
                        </form>
                        </body>
            </html>`,
        };

        // Send email
        transporter2.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email notification:', error);
            } else {
                console.log('Email notification sent:', info.response);
            }
        });

        const response = {
            message: 'Message submitted successfully',
            newUser: newUser // Include the newUser object in the response
        };

        res.status(201).json(response);

    } catch (error) {
        console.error('Error submitting Message:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = {
    submitContact
};
