import { Bool } from 'utils/primitives';

type TestResult = boolean;
interface Cases {
   [testName: string]: TestResult;
}

export const testCases = (tests: Cases) => {
   return Object.values(tests).every(Bool.doesPass);
};