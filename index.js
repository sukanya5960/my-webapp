import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

const messages = [
    'hello',
    'Who are you?',
    'Who\'s there?'
]

app.get('/', (req, res) => {
    
    res.render('home', { messages });

});

app.post('/message', (req, res) => {
    const messageText = req.body.messageText;
    messages.push(messageText);
    // res.send('Message received is ' + messageText);
    res.redirect('/')
})

app.get('/time', (req, res) => {

    res.send("Current time is " + (new Date()).toLocaleTimeString())
})

app.listen(8080, () => {

    console.log('listening on localhost:8080');

});