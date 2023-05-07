import express from 'express';
import { calculateBmi } from './bmiCalculator';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { weight, height } = req.query;

  res.json(
    { 
      weight: Number(weight), 
      height: Number(height), 
      bmi: calculateBmi(Number(weight), Number(height)) 
    }
  );
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});