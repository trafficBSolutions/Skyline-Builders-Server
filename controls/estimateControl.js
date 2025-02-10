const EstimateUser = require('../users/estimateUsers');
const myEmail = 'patelterry75@gmail.com';
const transporter = require('../utils/emailConfig');
const submitEstimate = async (req, res) => {
    try {
        const {
            first,
            last,
            company,
            email,
            phone,
            address,
            city,
            state,
            zip,
            job,
            message
        } = req.body
                // Validate email address
                const isValidEmail = /\S+@\S+\.\S+/.test(email);
                if (!isValidEmail) {
                    return res.status(400).json({
                        error: "Invalid email address"
                    });
                }
        
                // Create user record
                const newUser = await EstimateUser.create({
                    first,
                    last,
                    company,
                    email,
                    phone,
                    address,
                    city,
                    state,
                    zip,
                    job,
                    message
                });
        const mailOptions = {
            from: 'Skyline Builders, LLC <patelterry75@gmail.com>',
            to: email,
            bcc: [
                { name: 'Skyline Builders, LLC', address: myEmail },
            ],
            subject: 'ESTIMATE REQUEST',
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
                    color:#ffffff;"
                    >Skyline Builders, LLC</h2>
                    </header>
                   
                    <h2 style="margin-top: 20px;
                    font-size: 47px;
                    text-align: center;
                    font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                    color:#000000;"
                    >ESTIMATE REQUEST</h2>
                            <div style="margin-bottom: 15px;">
                        <h1 style="margin-top: 10px;
                                    font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Dear ${first},</h1>
                        <h1 style="margin-top: 5px;
                            font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Your estimate submission has been received successfully! We will be with you within 48 hours!</h1>
                        
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
        
                        <h1 style="
                        color:#000000;
                        font-family: 'Kairos W04 Extended Bold';
                        font-style: normal;
                        margin-top: 40px;
                        font-size: 60px;
                        ">Company Address:</h1>
        
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        ">Address: <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${address}</p></p>
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        ">City: <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${city}</p></p>
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        ">State: <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${state}</p></p>
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        ">Zip: <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${zip}</p></p>

                        <h1 style="
                        color:#000000;
                        font-family: 'Kairos W04 Extended Bold';
                        font-style: normal;
                        margin-top: 40px;
                        font-size: 60px;
                        ">Job Description:</h1>
                        
                        <p style="
                        color:#000000;
                        font-family: 'Kairos W04 Extended Bold';
                        font-style: normal;
                        margin-top: 40px;
                        font-size: 60px;
                        ">Job Type:</p>
                        <p style="
                        font-family: 'Kairos W04 Extended Bold', Arial, Helvetica, sans-serif;
                        font-style: normal;
                        margin-top: 20px;
                        font-size: 40px;
                        "> <p style="
                        margin-top: 10px;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif;
                        ">${job}</p></p>
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
                        Thank you for requesting an estimate from Skyline Builders! Your submission has been received successfully, 
                        and we appreciate the opportunity to assist you. Our team is now reviewing your request to understand your project needs in detail.  
                        If we require any additional information or clarifications, we will reach out to you promptly.  
                        We are committed to providing you with a detailed, accurate estimate and 
                        ensuring that your project is handled with the highest level of expertise.  
                        You can expect to hear back from us soon with further details. We look forward to working with you and bringing your vision to life!  
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
                            >306 Hillside Dr SW</h1>
                            <h1 style= "font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Calhoun, GA 30701</h1>
                            <h1 style= "font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;"
                            >Cell: (706) 844-5753</h1>
                            <h1 style= "font-family: 'Moveo Sans w00 Regular', Arial, Helvetica, sans-serif;">Website: <a href="http://www.trafficbarriersolutions.com">www.trafficbarriersolutions.com</a></h1>
                        </div>
                        </div>
                        </form>
                        </body>
            </html>`,
            }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email notification:', error);
            } else {
                console.log('Email notification sent:', info.response);
            }
        });
        const response = {
            message: 'Estimate Request submitted successfully',
            newUser: newUser // Include the newUser object in the response
        };
        res.status(201).json(response);
    } catch (error) {
        console.error('Error submitting Estimate Request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    submitEstimate
};
