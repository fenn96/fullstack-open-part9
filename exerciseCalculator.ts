interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface ExercisCalc {
  array: number[];
  target: number;
}

const parseExerciseArguments = (args: string[]): ExercisCalc => {
  if (args.length < 12) throw new Error('Not enough arguments');
  if (args.length > 12) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3])) && !isNaN(Number(args[4])) && !isNaN(Number(args[5])) && !isNaN(Number(args[6])) && !isNaN(Number(args[7])) && !isNaN(Number(args[8])) && !isNaN(Number(args[9])) && !isNaN(Number(args[10])) && !isNaN(Number(args[11]))) {
    return {
      array: [Number(args[3]), Number(args[4]), Number(args[5]), Number(args[6]), Number(args[7]), Number(args[8]), Number(args[9]), Number(args[10]), Number(args[11])],
      target: Number(args[2])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const calculateExercises = (array: number[], target: number): Result => {
  let rating: number;
  let ratingDescription: string;
  const trainingDays: number = array.filter((day) => day > 0).length;
  const success: boolean = array.filter((day) => day >= target).length === array.length;
  const average: number = array.reduce((acc, current) => acc + current, 0) / array.length;

  switch(true) {
    case (average >= target):
      rating = 3;
      ratingDescription = 'Perfect';
      break;
    case (average >= target / 2):
      rating = 2;
      ratingDescription = 'Not too bad but could be better';
      break;
    default:
      rating = 1;
      ratingDescription = 'Poor';
      break;
  }
  
  const result: Result = {
    periodLength: array.length,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average
  }

  return result
}

try {
  const { array, target } = parseExerciseArguments(process.argv);
  console.log(calculateExercises(array, target));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
