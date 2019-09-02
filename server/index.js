const express = require('express');
const app = express();
const port = 3001;
const mc = require('./controllers/messages_controller');
const messagesBaseUrl = "/api/messages";

app.use(express.json()); //App.use must be invoked first.

app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

