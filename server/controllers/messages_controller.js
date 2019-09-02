let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({id, text, time}); //push in id, text, and time to the array, so that it can be displayed later.
        id++; // increment id so that the same one isn't used twice.
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const text = req.body; // Original message
        const updateID = req.params.id; // ID for updated message
        const messageIndex = messages.findIndex(message => message.id == updateID); // Find the matching id in the array.
        let message = messages[messageIndex]; // Assign the message to a variable

        messages[messageIndex] = {
            id: message.id, //Reassign the new message to the ID
            text: text || message.text, //Assign the change in text
            time: message.time //Assign the new message time
        }

        res.status(200).send(messages); //Return the update
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        const deleteIndex = messages.findIndex(message => message.id == deleteID);

        messages.splice(deleteIndex, 1);

        res.status(200).send(messages);
    }
}