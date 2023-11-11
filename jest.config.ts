// jest coniguration file
export default {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["**/test/**/*.test.ts"],
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.ts",
		"!src/**/*.d.ts",
		"!src/**/index.ts",
		"!src/**/test/**",
	],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "html"],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
		},
	},
	ignorePatterns: ["dist", "node_modules"],
};