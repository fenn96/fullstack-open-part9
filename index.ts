import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
import { parseBmiArguments } from './utils/bmiParser';
import { parseExerciseArguments } from './utils/exerciseParser';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    const { weight, height } = parseBmiArguments(req.query);
    res.send(
      { 
        weight: weight, 
        height: height, 
        bmi: calculateBmi(height, weight) 
      }
    );
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.post('/exercises', (req, res) => {
  try {
    const { daily_exercises, target } = parseExerciseArguments(req.body);
    res.send(calculateExercises(daily_exercises, target));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});