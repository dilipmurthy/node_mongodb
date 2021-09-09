import express from 'express';
import data from './data/MOCK_DATA.json';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


routes(app);

// serving static files from public folder
/**
 * app.use(express.static('public'));
 */

app.get('/',(req,res) =>{
    res.send(`Hi, this is the get request on port ${PORT}`);
});

app.get('/hello',(req,res) => res.send('this is app.use'));

app.listen(PORT, () => { console.log(data)})