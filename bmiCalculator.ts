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