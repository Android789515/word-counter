import { checkCommitMessage } from './gitChecks';

interface FakeCommitMessage {
    title?: string;
    lineOfSpace?: boolean,
    body?: string;
}

const fakeCommitMessage = ({ title = '', lineOfSpace, body = '' }: FakeCommitMessage) => {
    return (
        title
        + (lineOfSpace ? '\n\n' : '')
        + body
    );
};

describe('GitChecks', () => {
    it('Validates the first line is 50 characters or less', () => {
        const { title: titlePass } = checkCommitMessage(fakeCommitMessage({
            // Exactly 50 letters
            title: 'Create component for individual git message checks'
        }));

        expect(titlePass).toEqual(true);

        const { title: titleFail } = checkCommitMessage(fakeCommitMessage({
            title: 'Changes that affect the build system or external dependencies ' +
                '(example scopes: gulp, broccoli, npm)'
        }));

        expect(titleFail).toEqual(false);
    });

    it('Validates that there is a line of space between the title and the body', () => {
        const { blankLine: blankLinePass } = checkCommitMessage(fakeCommitMessage({
            title: 'Create app component',
            lineOfSpace: true
        }));

        expect(blankLinePass).toEqual(true);

        const { blankLine: blankLineFail } = checkCommitMessage(fakeCommitMessage({
            title: 'Create app component',
            lineOfSpace: false
        }));

        expect(blankLineFail).toEqual(false);
    });

    it('Validates that the body text wraps at 72 characters', () => {
        const { body: bodyPass } = checkCommitMessage(fakeCommitMessage({
            title: 'Create app component',
            lineOfSpace: true,
            body: 'Changes that affect the build system or external dependencies (example '
                + '\n'
                + 'scopes: gulp, broccoli, npm)'
        }));

        expect(bodyPass).toEqual(true);

        const { body: bodyFail } = checkCommitMessage(fakeCommitMessage({
            title: 'Create app component',
            lineOfSpace: true,
            // Wrapped at 85 characters
            body: 'Changes that affect the build system or external dependencies (example scopes: gulp, '
                + '\n'
                + 'broccoli, npm)'
        }));

        expect(bodyFail).toEqual(false);
    });
});