const scanner = require("sonarqube-scanner");
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: 'squ_01b3f727e5287062e2f76c421d626d5ff69441d2',
        projectKey:'source-base-react',
        options: {
        "sonar.sources": "./src",
        },
    },
    () => process.exit()
);