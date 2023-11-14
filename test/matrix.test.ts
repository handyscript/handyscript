import { describe, expect, test } from "@jest/globals";
import Matrix from "../lib/matrix";

describe("Matrix class", () => {
	describe("constructor", () => {
		test("should create a matrix with the correct dimensions and values", () => {
			const data = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			];
			const matrix = new Matrix(data);
			expect(matrix.size()).toEqual({ rows: 3, cols: 3 });
			expect(matrix.get(0, 0)).toEqual(1);
			expect(matrix.get(1, 1)).toEqual(5);
			expect(matrix.get(2, 2)).toEqual(9);
		});

		test("should throw an error if the rows have different number of columns", () => {
			const data = [
				[1, 2, 3],
				[4, 5],
				[7, 8, 9],
			];
			expect(() => new Matrix(data)).toThrow("All rows must have the same number of columns.");
		});

		test("should throw an error if the data is not an array of arrays", () => {
			const data = [1, 2, 3];
			// @ts-expect-error testing invalid Matrix constructor
			expect(() => new Matrix(data)).toThrow("Invalid data format. Expecting an array of arrays.");
		});
	});

	describe("zeros", () => {
		test("should create a matrix filled with zeros", () => {
			const matrix = Matrix.zeros(2, 3);
			expect(matrix.size()).toEqual({ rows: 2, cols: 3 });
			expect(matrix.get(0, 0)).toEqual(0);
			expect(matrix.get(1, 2)).toEqual(0);
		});
	});

	describe("ones", () => {
		test("should create a matrix filled with ones", () => {
			const matrix = Matrix.ones(2, 3);
			expect(matrix.size()).toEqual({ rows: 2, cols: 3 });
			expect(matrix.get(0, 0)).toEqual(1);
			expect(matrix.get(1, 2)).toEqual(1);
		});
	});

	describe("eye", () => {
		test("should create an identity matrix", () => {
			const matrix = Matrix.eye(3);
			expect(matrix.size()).toEqual({ rows: 3, cols: 3 });
			expect(matrix.get(0, 0)).toEqual(1);
			expect(matrix.get(1, 1)).toEqual(1);
			expect(matrix.get(2, 2)).toEqual(1);
			expect(matrix.get(0, 1)).toEqual(0);
			expect(matrix.get(1, 0)).toEqual(0);
			expect(matrix.get(2, 1)).toEqual(0);
		});
	});

	describe("random", () => {
		test("should create a matrix filled with random values", () => {
			const matrix = Matrix.random(2, 3, 10, 5);
			expect(matrix.size()).toEqual({ rows: 2, cols: 3 });
			expect(matrix.toArray().flat().every((val) => val >= 5 && val <= 10)).toBe(true);
		});
	});

	describe("add", () => {
		test("should add two matrices with the same dimensions", () => {
			const matrix1 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const matrix2 = new Matrix([
				[5, 6],
				[7, 8],
			]);
			const result = matrix1.add(matrix2);
			expect(result.size()).toEqual({ rows: 2, cols: 2 });
			expect(result.get(0, 0)).toEqual(6);
			expect(result.get(1, 1)).toEqual(12);
		});

		test("should add multiple matrices with the same dimensions", () => {
			const matrix1 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const matrix2 = new Matrix([
				[5, 6],
				[7, 8],
			]);
			const matrix3 = new Matrix([
				[9, 10],
				[11, 12],
			]);
			const result = matrix1.add(matrix2, matrix3);
			expect(result.size()).toEqual({ rows: 2, cols: 2 });
			expect(result.get(0, 0)).toEqual(15);
			expect(result.get(1, 1)).toEqual(24);
		});

		test("should throw an error if the matrices have different dimensions", () => {
			const matrix1 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const matrix2 = new Matrix([
				[5, 6, 7],
				[8, 9, 10],
			]);
			expect(() => matrix1.add(matrix2)).toThrow("Matrix dimensions must be the same for addition.");
		});
	});

	describe("subtract", () => {
		test("should subtract two matrices with the same dimensions", () => {
			const matrix1 = new Matrix([
				[5, 6],
				[7, 8],
			]);
			const matrix2 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const result = matrix1.subtract(matrix2);
			expect(result.size()).toEqual({ rows: 2, cols: 2 });
			expect(result.get(0, 0)).toEqual(4);
			expect(result.get(1, 1)).toEqual(4);
		});

		test("should subtract multiple matrices with the same dimensions", () => {
			const matrix1 = new Matrix([
				[9, 10],
				[11, 12],
			]);
			const matrix2 = new Matrix([
				[5, 6],
				[7, 8],
			]);
			const matrix3 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const result = matrix1.subtract(matrix2, matrix3);
			expect(result.size()).toEqual({ rows: 2, cols: 2 });
			expect(result.get(0, 0)).toEqual(3);
			expect(result.get(1, 1)).toEqual(0);
		});

		test("should throw an error if the matrices have different dimensions", () => {
			const matrix1 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const matrix2 = new Matrix([
				[5, 6, 7],
				[8, 9, 10],
			]);
			expect(() => matrix1.subtract(matrix2)).toThrow("Matrix dimensions must be the same for subtraction.");
		});
	});

	describe("multiply", () => {
		test("should multiply two matrices with compatible dimensions", () => {
			const matrix1 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const matrix2 = new Matrix([
				[5, 6],
				[7, 8],
			]);
			const result = matrix1.multiply(matrix2);
			expect(result.size()).toEqual({ rows: 2, cols: 2 });
			expect(result.get(0, 0)).toEqual(19);
			expect(result.get(1, 1)).toEqual(50);
		});

		test("should multiply multiple matrices with compatible dimensions", () => {
			const matrix1 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const matrix2 = new Matrix([
				[5, 6],
				[7, 8],
			]);
			const matrix3 = new Matrix([
				[9, 10],
				[11, 12],
			]);
			const result = matrix1.multiply(matrix2, matrix3);
			expect(result.size()).toEqual({ rows: 2, cols: 2 });
			expect(result.get(0, 0)).toEqual(413);
			expect(result.get(1, 1)).toEqual(1030);
		});
	});

	describe("scale", () => {
		test("should scale the matrix by a scalar", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const result = matrix.scale(2);
			expect(result.size()).toEqual({ rows: 2, cols: 2 });
			expect(result.get(0, 0)).toEqual(2);
			expect(result.get(1, 1)).toEqual(8);
		});
	});

	describe("transpose", () => {
		test("should transpose the matrix", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
				[5, 6],
			]);
			const result = matrix.transpose();
			expect(result.size()).toEqual({ rows: 2, cols: 3 });
			expect(result.get(0, 0)).toEqual(1);
			expect(result.get(1, 1)).toEqual(4);
			expect(result.get(0, 2)).toEqual(5);
		});
	});

	describe("get", () => {
		test("should get the value at the given row and column", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
			]);
			expect(matrix.get(0, 0)).toEqual(1);
			expect(matrix.get(1, 1)).toEqual(4);
		});

		test("should throw an error if the row or column index is out of bounds", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
			]);
			expect(() => matrix.get(2, 0)).toThrow("Invalid row or column index.");
			expect(() => matrix.get(0, 2)).toThrow("Invalid row or column index.");
		});
	});

	describe("set", () => {
		test("should set the value at the given row and column", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
			]);
			matrix.set(0, 0, 5);
			matrix.set(1, 1, 6);
			expect(matrix.get(0, 0)).toEqual(5);
			expect(matrix.get(1, 1)).toEqual(6);
		});

		test("should throw an error if the row or column index is out of bounds", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
			]);
			expect(() => matrix.set(2, 0, 5)).toThrow("Invalid row or column index.");
			expect(() => matrix.set(0, 2, 6)).toThrow("Invalid row or column index.");
		});
	});

	describe("toArray", () => {
		test("should convert the matrix to an array", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const result = matrix.toArray();
			expect(result).toEqual([
				[1, 2],
				[3, 4],
			]);
		});
	});

	describe("flatten", () => {
		test("should flatten the matrix to a 1D array", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const result = matrix.flatten();
			expect(result).toEqual([1, 2, 3, 4]);
		});
	});

	describe("clone", () => {
		test("should create a copy of the matrix", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const result = matrix.clone();
			expect(result).toEqual(matrix);
			expect(result).not.toBe(matrix);
		});
	});
});