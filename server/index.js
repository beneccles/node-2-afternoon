const express = require('express');
const app = express();
const port = 3001;
const mc = require('./controllers/messages_controller');
const messagesBaseUrl = "/api/messages";

// .use "Please use the referenced files"
app.use(express.json()); //App.use must be invoked first.
app.use(express.static(__dirname + '/../public/build')); //Middleware function
//_dirname is a keyword that tells you the absolute path of the directory containing the currently executing file.

app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

