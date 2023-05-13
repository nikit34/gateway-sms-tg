const express = require('express')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const app = express()
const port = 3000

const botName = 'bot6222494632';
const botToken = 'AAG1I5npTLlqo3cl_4jgredo_ptBjHd2ajw';
const chatId = '-1001883224861';

const sendMsgTg = (text) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.telegram.org/${botName}:${botToken}/sendMessage?chat_id=${chatId}&text=${text}`);
    xhr.send();
}

app.get('/', (req, res) => {
    const text = req.query.text;

    let responseText;
    if (text === undefined) {
        responseText = "Request without 'text' params";
    } else if (text === '' ) {
        responseText = "Request inset value for 'text' params";
    } else {
        responseText = 'Request has been processed';
        sendMsgTg(text);
    }

    console.log(responseText);
    res.send(responseText);
});

app.listen(port);
