const { startEnvironments } = require('@mockoon/cli');
startEnvironments({
  data: ['./environment.json'],
  port: 3000
});