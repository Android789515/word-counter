export type TestNames = 'title' | 'blankLine' | 'bodyText';

type GitMessageTestResult = boolean;

export interface GitMessageTests {
    title: GitMessageTestResult;
    blankLine: GitMessageTestResult;
    bodyText: GitMessageTestResult;
}

export enum MessageHeaderTypes {
    build = 'build',
    chore = 'chore',
    ci = 'ci',
    docs = 'docs',
    feat = 'feat',
    fix = 'fix',
    perf = 'perf',
    refactor = 'refactor',
    revert = 'revert',
    style = 'style',
    test = 'test'
}