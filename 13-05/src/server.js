import express from 'express';
import route from './routes/vegetableRoutes.js';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('No routes here.');
});

app.use('/vegetables', route);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})