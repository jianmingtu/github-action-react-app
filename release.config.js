module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/jianmingtu/github-action-react-app/',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
