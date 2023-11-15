import type {Config} from "jest";

// jest coniguration file
const config: Config = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["**/test/**/*.test.ts"],
	verbose: true, // show all tests
	collectCoverage: true,
	// collect coverage from all files except test files
	collectCoverageFrom: [
		"**/*.ts",
		"!**/*.d.ts",
		"!/index.ts",
		"!**/test/**",
		"!**/*.test.*",
		"!**/*.config.*",
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
	testPathIgnorePatterns: ["/node_modules/", "/dist/", "/coverage/"],
	modulePathIgnorePatterns: ["/node_modules/", "/dist/", "/coverage/"],
	watchPathIgnorePatterns: ["/node_modules/", "/dist/", "/coverage/"],
};

export default config;