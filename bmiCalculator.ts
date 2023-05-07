interface BmiCalc {
  height: number;
  weight: number;
}

export const parseBmiArguments = (args: string[]): BmiCalc => {
  if (args.length < 5) throw new Error('Not enough arguments');
  if (args.length > 5) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      weight: Number(args[2]),
      height: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

export const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / height / height * 10000;
  switch(true) {
    case (bmi < 18.5):
      return 'Under Weight';
    case (bmi >= 18.5 && bmi <= 24.9):
      return 'Normal (healthy weight)';
    case (bmi >= 25 && bmi <= 29.9):
      return 'Over Weight';
    case (bmi >= 30 && bmi <= 34.9):
      return 'Obese (Class I)';
    case (bmi >= 35 && bmi <= 39.9):
    default:
      return 'Obese (Class II)';
  }
};