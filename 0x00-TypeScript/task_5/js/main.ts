export interface MajorCredits {
  credits: number;
  brand: 'majorCredits';
}

export interface MinorCredits {
  credits: number;
  brand: 'minorCredits';
}

export const sumMajorCredits = (subject1: number, subject2: number) => {
  return subject1 + subject2;
}

export const sumMinorCredits = (subject1: number, subject2: number) => {
  return subject1 + subject2;
}
