export default {
    testEnvironment: "node",
    transform: {},
    reporters: [
        "default",
        ["jest-junit", { outputDirectory: "./reports", outputName: "jest-report.xml" }]
      ]
  };