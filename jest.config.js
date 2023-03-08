module.exports = {
    setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],

    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  