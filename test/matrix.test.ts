import {describe, expect} from "@jest/globals";
import Matrix from "../lib/matrix";

describe("Matrix class", () => {
	describe("constructor", () => {
		it("should create a matrix with the correct number of rows and columns", () => {
			const data = [
				[1, 2, 3],
				[4, 5, 6],
			];
			const matrix = new Matrix(data);
			expect(matrix.size()).toEqual({ rows: 2, cols: 3 });
		});

		it("should throw an error if the rows have different number of columns", () => {
			const data = [
				[1, 2, 3],
				[4, 5],
			];
			expect(() => new Matrix(data)).toThrow("All rows must have the same number of columns.");
		});

		it("should throw an error if the data is not an array of arrays", () => {
			const data = [1, 2, 3];
			expect(() => new Matrix(data)).toThrow("Invalid data format. Expecting an array of arrays.");
		});
	});

	describe("zeros", () => {
		it("should create a matrix filled with zeros", () => {
			const matrix = Matrix.zeros(2, 3);
			expect(matrix.toArray()).toEqual([
				[0, 0, 0],
				[0, 0, 0],
			]);
		});
	});

	describe("ones", () => {
		it("should create a matrix filled with ones", () => {
			const matrix = Matrix.ones(2, 3);
			expect(matrix.toArray()).toEqual([
				[1, 1, 1],
				[1, 1, 1],
			]);
		});
	});

	describe("eye", () => {
		it("should create an identity matrix", () => {
			const matrix = Matrix.eye(3);
			expect(matrix.toArray()).toEqual([
				[1, 0, 0],
				[0, 1, 0],
				[0, 0, 1],
			]);
		});
	});

	describe("random", () => {
		it("should create a matrix filled with random values between 0 and 1", () => {
			const matrix = Matrix.random(2, 3, 1);
			expect(matrix.toArray().flat().every((val) => val >= 0 && val <= 1)).toBe(true);
		});

		it("should create a matrix filled with random values between min and max", () => {
			const matrix = Matrix.random(2, 3, 10, 5);
			expect(matrix.toArray().flat().every((val) => val >= 5 && val <= 10)).toBe(true);
		});
	});

	describe("add", () => {
		it("should add two matrices", () => {
			const matrix1 = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			const matrix2 = new Matrix([
				[7, 8, 9],
				[10, 11, 12],
			]);
			const result = Matrix.add(matrix1, matrix2);
			expect(result.toArray()).toEqual([
				[8, 10, 12],
				[14, 16, 18],
			]);
		});

		it("should throw an error if the matrices have different sizes", () => {
			const matrix1 = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			const matrix2 = new Matrix([
				[7, 8],
				[10, 11],
			]);
			expect(() => Matrix.add(matrix1, matrix2)).toThrow("Matrix dimensions must be the same for addition.");
		});
	});

	describe("subtract", () => {
		it("should subtract two matrices", () => {
			const matrix1 = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			const matrix2 = new Matrix([
				[7, 8, 9],
				[10, 11, 12],
			]);
			const result = Matrix.subtract(matrix1, matrix2);
			expect(result.toArray()).toEqual([
				[-6, -6, -6],
				[-6, -6, -6],
			]);
		});

		it("should throw an error if the matrices have different sizes", () => {
			const matrix1 = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			const matrix2 = new Matrix([
				[7, 8],
				[10, 11],
			]);
			expect(() => Matrix.subtract(matrix1, matrix2)).toThrow("Matrix dimensions must be the same for subtraction.");
		});
	});

	describe("multiply", () => {
		it("should multiply two matrices", () => {
			const matrix1 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const matrix2 = new Matrix([
				[5, 6],
				[7, 8],
			]);
			const result = Matrix.multiply(matrix1, matrix2);
			expect(result.toArray()).toEqual([
				[19, 22],
				[43, 50],
			]);
		});

		it("should throw an error if the matrices have incompatible sizes", () => {
			const matrix1 = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const matrix2 = new Matrix([
				[5, 6, 7],
				[8, 9, 10],
			]);
			expect(() => Matrix.multiply(matrix1, matrix2)).toThrow(
				"Number of columns in Matrix 1 must match the number of rows in Matrix 2 for multiplication."
			);
		});
	});

	describe("scale", () => {
		it("should multiply a matrix by a scalar", () => {
			const matrix = new Matrix([
				[1, 2],
				[3, 4],
			]);
			const result = Matrix.scale(matrix, 2);
			expect(result.toArray()).toEqual([
				[2, 4],
				[6, 8],
			]);
		});
	});

	describe("transpose", () => {
		it("should transpose a matrix", () => {
			const matrix = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			const result = Matrix.transpose(matrix);
			expect(result.toArray()).toEqual([
				[1, 4],
				[2, 5],
				[3, 6],
			]);
		});
	});

	describe("get", () => {
		it("should get the value at the given row and column", () => {
			const matrix = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			expect(matrix.get(1, 2)).toEqual(6);
		});

		it("should throw an error if the row or column index is out of bounds", () => {
			const matrix = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			expect(() => matrix.get(2, 1)).toThrow("Invalid row or column index.");
		});
	});

	describe("set", () => {
		it("should set the value at the given row and column", () => {
			const matrix = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			matrix.set(1, 2, 7);
			expect(matrix.get(1, 2)).toEqual(7);
		});

		it("should throw an error if the row or column index is out of bounds", () => {
			const matrix = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			expect(() => matrix.set(2, 1, 7)).toThrow("Invalid row or column index.");
		});
	});

	describe("toArray", () => {
		it("should convert the matrix to an array", () => {
			const matrix = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			expect(matrix.toArray()).toEqual([
				[1, 2, 3],
				[4, 5, 6],
			]);
		});
	});

	describe("flatten", () => {
		it("should convert the matrix to a flattened array", () => {
			const matrix = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			expect(matrix.flatten()).toEqual([1, 2, 3, 4, 5, 6]);
		});
	});

	describe("clone", () => {
		it("should create a copy of the matrix", () => {
			const matrix = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			const copy = matrix.clone();
			expect(copy.toArray()).toEqual(matrix.toArray());
			expect(copy).not.toBe(matrix);
		});
	});

	describe("log", () => {
		it("should log the matrix to the console", () => {
			const matrix = new Matrix([
				[1, 2, 3],
				[4, 5, 6],
			]);
			const spy = jest.spyOn(console, "log").mockImplementation(() => {});
			matrix.log();
			expect(spy).toHaveBeenCalledWith("1 2 3\n4 5 6");
			spy.mockRestore();
		});
	});
});