const nodemailer = require("nodemailer");

const getTaskAssignMailContent = (username, task, managerName) => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    html = `
    <body>
        Hello <b>${username}</b>,<br/>
        A new task is assigned to you by <b>${managerName}</b><br/>
        Task details : <b>${task}</b><br/>
        Regards,<br/>
        EMS
    </body>
    `
    return html;
}

const sendMail = ({receipientEmail, receipientName, task, managerName}) => {
    try {
        const transport = nodemailer.createTransport({
            port: 5500,
            service: 'gmail',
            auth: {
                user: 'ems.rutvik@gmail.com',
                pass: 'skmc pete dkzb wqgk'
                //app password from google account
            },
        });

        const mailOption = {
            from: 'Rutvik Raut',
            to: receipientEmail,
            subject: 'Task Assignment',
            html: getTaskAssignMailContent(receipientName, task, managerName),
        };

        transport.sendMail(mailOption, (error) => {
            if (error) {
                console.log('====================================');
                console.log("Error occured while sending email...");
                console.dir(error, { depth: 'Infinity' });
                console.log('====================================');
            } else {
                console.log('====================================');
                console.log('Email sent successfully...');
                console.log('====================================');
            }
        });
    } catch (error) {
        console.log(error, { depth: 'Infinity' });
    }
};

module.exports = sendMail;