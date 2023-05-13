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
};

const sendMsgPhoneTg = (phone, text) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.telegram.org/${botName}:${botToken}/sendMessage?chat_id=${chatId}&text=${phone} - ${text}`);
    xhr.send();
};

const checkQueryParam = (param) => (param === undefined || param === '') ? false : true;

app.get('/', (req, res) => {
    const text = req.query.text;
    const phone = req.query.phone;

    if (checkQueryParam(text)) {
        if (checkQueryParam(phone))
            sendMsgPhoneTg(phone, text);
        else
            sendMsgTg(text);
        responseText = 'Request has been processed';
    } else {
        responseText = 'Request has invalid value params';
    }

    console.log(responseText);
    res.send(responseText);
});

app.listen(port);
