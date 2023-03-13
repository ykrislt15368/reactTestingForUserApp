const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    login: "admin",
    password: "Hello@123",
    token: "29fa8b64df23dc5b26074133de259fbc02c2502d",
    options: {
      "sonar.projectName": "sonarqube-react-project",
      "sonar.projectKey": "sonarqube-react-project",
      "sonar.projectVersion": "0.0.1",
      "sonar.sources": "./src",
      // "sonar.exclusions": "**/*.test.jsx",
      "sonar.tests": "./src",
      "sonar.test.inclusions": "**/*.test.jsx,**/*.test.js",
      "sonar.javascript.lcov.reportPaths": "./coverage/lcov.info",
     // "sonar.testExecutionReportPaths": "./test-report.xml",
    },
  },
  () => process.exit()
);

// scanner(
//     {
//         serverUrl: 'http://localhost:9000',
//         token: "29fa8b64df23dc5b26074133de259fbc02c2502d",
//         options: {
//             'sonar.projectName': 'sonarqube-react-project',
//             'sonar.projectDescription': 'Here I can add a description of my project',
//             'sonar.projectKey': 'sonarqube-react-project',
//             'sonar.projectVersion': '0.0.1',
//             'sonar.exclusions': '',
//             'sonar.sourceEncoding': 'UTF-8',
//             'sonar.exclusions': '**/*.test.js',
//             'sonar.tests': '../src',
//             'sonar.test.inclusions': '**/*.test.jsx,**/*.test.js',
//             'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
//             'sonar.testExecutionReportPaths': 'test-report.xml'
//         }
//     },
//     () => process.exit()
// )
