const express = require('express')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const app = express()
const port = 80

const botName = 'bot6222494632';
const botToken = 'AAG1I5npTLlqo3cl_4jgredo_ptBjHd2ajw';
const chatId = '-1001883224861';

const sendRequest = (url, labelLog) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        console.log(labelLog + ': ' + xhr.status);
    };
    xhr.send();
}

const sendMsgTg = (text) => {
    sendRequest(
        `https://api.telegram.org/${botName}:${botToken}/sendMessage?chat_id=${chatId}&text=${text}`,
        'sendMsgTg'
    );
};

const sendMsgPhoneTg = (phone, text) => {
    sendRequest(
        `https://api.telegram.org/${botName}:${botToken}/sendMessage?chat_id=${chatId}&text=${phone} - ${text}`,
        'sendMsgPhoneTg'
    );
};

const checkQueryParam = (param) => !(param === undefined || param === '');

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

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});
