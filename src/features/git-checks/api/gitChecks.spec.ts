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
        const { title: passTitle } = checkCommitMessage(fakeCommitMessage({
            // Exactly 50 letters
            title: 'Create component for individual git message checks'
        }));

        expect(passTitle).toEqual(true);

        const { title: failTitle } = checkCommitMessage(fakeCommitMessage({
            title: 'Changes that affect the build system or external dependencies ' +
                '(example scopes: gulp, broccoli, npm)'
        }));

        expect(failTitle).toEqual(false);
    });
});