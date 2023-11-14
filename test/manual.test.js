import "../dist/hs.min.js";
import Matrix from "../dist/hs.min.js";

console.log("RUNNING MANUAL TESTS");

const matrix1 = new Matrix([
	[1, 2],
	[3, 4],
]);
const matrix2 = new Matrix([
	[5, 6, 7],
	[8, 9, 10],
]);

try {
	Matrix.multiply(matrix1, matrix2);
	// If the control reaches here, it means the error was not thrown
} catch (error) {
	console.log(error);
}
