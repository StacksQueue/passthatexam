export interface IQuestion {
    _id: string;
    source: string;
    program: string;
    year: number;
    major: string[];
    question: string;
    choices: string[];
    answer: string;
    explanation: string;
}