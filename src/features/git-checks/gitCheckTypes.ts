export type TestNames = 'title' | 'blankLine' | 'body';

type GitMessageTestResult = boolean;

export interface GitMessageTests {
    title: GitMessageTestResult;
    blankLine: GitMessageTestResult;
    body: GitMessageTestResult;
}

export enum GitHeaderTypes {
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