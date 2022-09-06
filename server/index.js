const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Hello");
})


app.post("/sendEmail",(req,res)=>{
    let data = req.body;
    console.log(data);
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: "goel.2002pranay@gmail.com",
            pass: "kzbofyfbwewnqtdt"
        }
    });
    let mailOptions = {
        from: data.emailId,
        to: "goel.2002pranay@gmail.com",
        subject: `Message from ${data.fullName} - ${data.subject}`,
        html: `
            <h3>Informations</h3>
            <ul>
                <li>Name: ${data.fullName}</li>
                <li>Email: ${data.emailId}</li>
                <li>Subject: ${data.subject}</li>
            </ul>
            <p>${data.message}</p>
        `
    };
    smtpTransport.sendMail(mailOptions,(error,response)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send("success");
        }
    })
    smtpTransport.close();
})
const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`);
})
