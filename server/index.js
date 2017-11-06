const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.use(express.static('dist'));

const contacts = [
    { id: 1, name: 'Ti', phoneNumber: '09876543355' },
    { id: 2, name: 'Teo', phoneNumber: '0964567876' },
    { id: 3, name: 'Tun', phoneNumber: '02345675876' },
];

app.get('/api/contacts', (req, res) => {
    res.send(contacts);
})

app.get('/api/contact/:id', (req, res) => {
    const contact = contacts.find(e => e.id == req.params.id);
    res.send(contact);
});

app.get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));

app.listen(3000, () => console.log('Server started!'));
