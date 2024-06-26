const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { verify } = require('crypto');
const app = express();

const CMDKRoute = require("./routes/CMDK/index");

require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Hello");
})

app.use("/cmdk", CMDKRoute);

app.get("/ip",(req,res) => {
    try {
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      res.json({ip: clientIP});
    }
    catch(err) {
        res.json({ip: "127.0.0.1"})
    }
})

app.post("/sendEmail",(req,res)=>{
    let data = req.body;
    console.log(data);
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PASS
        }
    });
    let mailOptions = {
        from: data.emailId,
        to: process.env.MAIL_ID,
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
            res.send('error')
        }
        else{
            res.send("success");
        }
    })
    smtpTransport.close();
})
app.post("/sendTestimonial",(req,res)=>{
    let data = req.body;
    console.log(data);
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PASS
        }
    });
    let mailOptions = {
        from: data.emailId,
        to: process.env.MAIL_ID,
        subject: `Message from ${data.fullName}`,
        html: `
            <h3>Informations</h3>
            <ul>
                <li>Name: ${data.fullName}</li>
                <li>Email: ${data.emailId}</li>
            </ul>
            <p>${data.message}</p>
        `
    };
    smtpTransport.sendMail(mailOptions,(error,response)=>{
        if(error){
            res.send('error')
        }
        else{
            res.send("success");
        }
    })
    smtpTransport.close();
})

const path = require('path')

app.use(express.static(path.join(__dirname,"portfolio/build")))

app.get('*',(req,res)=>{    
    res.sendFile(path.join(__dirname,"./portfolio/build/index.html"))
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`);
})
