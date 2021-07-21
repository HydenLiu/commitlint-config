'use strict'

module.exports = {
	types: [
		{
			value: 'WIP',
			name: '💪  WIP:      Work in progress',
		},
		{
			value: 'feat',
			name: '✨  feat:     A new feature',
		},
		{
			value: 'fix',
			name: '🐞  fix:      A bug fix',
		},
		{
			value: 'refactor',
			name: '🛠  refactor: A code change that neither fixes a bug nor adds a feature',
		},
		{
			value: 'docs',
			name: '📚  docs:     Documentation only changes',
		},
		{
			value: 'test',
			name: '🏁  test:     Add missing tests or correcting existing tests',
		},
		{
			value: 'chore',
			name: "🗯  chore:    Changes that don't modify src or test files. Such as updating build tasks, package manager",
		},
		{
			value: 'style',
			name: '💅  style:    Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
		},
		{
			value: 'revert',
			name: '⏪  revert:   Revert to a commit',
		},
	],

	scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

	messages: {
		type: "Select the type of change that you're committing:",
		scope: '\nDenote the SCOPE of this change (optional):',
		// used if allowCustomScopes is true
		customScope: 'Denote the SCOPE of this change:',
		subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		breaking: 'List any BREAKING CHANGES (optional):\n',
		footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #1, #2:\n',
		confirmCommit: 'Are you sure you want to proceed with the commit above?',
	},

	allowCustomScopes: true,
	allowBreakingChanges: ['feat', 'fix'],
	subjectLimit: 100,
}
