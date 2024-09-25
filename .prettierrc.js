module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 80,
  tabWidth: 2,
  proseWrap: 'always',
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  bracketSpacing: false,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.js'],
      options: {parser: 'babel'},
    },
    {
      files: ['*.ts'],
      options: {parser: 'typescript'},
    },
    {
      files: ['*.json', '.prettierrc', '.stylelintrc'],
      options: {parser: 'json'},
    },
    {
      files: ['*.less'],
      options: {parser: 'less'},
    },
    {
      files: ['*.scss'],
      options: {parser: 'scss'},
    },
    {
      files: ['*.html'],
      options: {parser: 'html'},
    },
    {
      files: ['*.svg'],
      options: {parser: 'xml'},
    },
    {
      files: ['*.xml'],
      options: {parser: 'xml'},
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {parser: 'yaml', tabWidth: 2},
    },
    {
      files: ['*.md'],
      options: {parser: 'markdown', tabWidth: 2},
    },
  ],
};
