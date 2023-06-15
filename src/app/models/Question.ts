export interface IQuestion {
    source: string;
    program: string;
    year: number;
    major: string[];
    question: string;
    choices: string[];
    answer: string;
}