/// ------------------------------- HANDY MATRIX © HandyScript 5m/28d/23y -------------------------------
/* eslint-disable @typescript-eslint/no-this-alias */

/**
 * implementation of `matrix` operations in typescript/javascript
 */
export default class Matrix {
	private readonly rows: number;
	private readonly cols: number;
	private readonly data: number[][];

	constructor(data: number[][]) {
		if (Array.isArray(data) && data.every((row) => Array.isArray(row))) {
			// Copy the data array
			this.data = [...data];

			// Check if all rows have the same number of columns
			const cols = data[0].length;
			if (!data.every((row) => row.length === cols)) {
				throw new Error("All rows must have the same number of columns.");
			}

			this.rows = data.length;
			this.cols = cols;
		} else {
			throw new Error("Invalid data format. Expecting an array of arrays.");
		}
	}

	/**
   * fill the matrix with zeros `0` based on the given `rows` and `columns`
   */
	public static zeros(rows: number, cols: number): Matrix {
		const data: number[][] = new Array(rows)
			.fill(0)
			.map(() => new Array(cols).fill(0));
		return new Matrix(data);
	}

	/**
   * fill the matrix with ones `1` based on the given `rows` and `columns`
   */
	public static ones(rows: number, cols: number): Matrix {
		const data: number[][] = new Array(rows)
			.fill(0)
			.map(() => new Array(cols).fill(1));
		return new Matrix(data);
	}

	/**
   * return a matrix with 1 along the `diagonal` and 0 elsewhere, based on the given `size`
   */
	public static eye(size: number): Matrix {
		const data: number[][] = new Array(size).fill(0).map((_, i) => {
			const row = new Array(size).fill(0);
			row[i] = 1;
			return row;
		});
		return new Matrix(data);
	}

	/**
   * return a matrix with random values between `min` and `max` based on the given `rows` and `columns`
   */
	public static random(rows: number, cols: number, max: number, min = 0): Matrix {
		const data: number[][] = new Array(rows)
			.fill(0)
			.map(() => new Array(cols).fill(0).map(() => Math.random() * (max - min) + min));
		return new Matrix(data);
	}

	/**
   * Addition of given matrices: `matrix1` + `matrix2` + `matrix3` + ...
   */
	add(...matrices: Matrix[]): Matrix {
		matrices.forEach((matrix) => {
			if (!Matrix.isSameSize(this, matrix)) {
				throw new Error("Matrix dimensions must be the same for addition.");
			}
		});

		const result: number[][] = this.data.map((row: number[], i: number) =>
			row.map((val: number, j: number) =>
				matrices.reduce((acc, matrix) => acc + matrix.data[i][j], val)
			)
		);

		return new Matrix(result);
	}

	/**
   * Subtraction of given matrices: `matrix1` - `matrix2` - `matrix3` - ...
   */
	subtract(...matrices: Matrix[]): Matrix {
		matrices.forEach((matrix) => {
			if (!Matrix.isSameSize(this, matrix)) {
				throw new Error("Matrix dimensions must be the same for subtraction.");
			}
		});

		const result: number[][] = this.data.map((row: number[], i: number) =>
			row.map((val: number, j: number) =>
				matrices.reduce((acc, matrix) => acc - matrix.data[i][j], val)
			)
		);

		return new Matrix(result);
	}

	/**
   * Multiplication of matrices: `matrix1` * `matrix2`, complexity: `O(n^3)`
   */
	multiply(...matrices: Matrix[]): Matrix {
		let result: Matrix = this;
		for (const matrix of matrices) {
			result = result.multiplyTwo(matrix);
		}
		return result;
	}

	private multiplyTwo(matrix: Matrix): Matrix {
		const result: number[][] = new Array(this.rows)
			.fill(0)
			.map(() => new Array(matrix.cols).fill(0));

		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < matrix.cols; j++) {
				for (let k = 0; k < this.cols; k++) {
					result[i][j] += this.data[i][k] * matrix.data[k][j];
				}
			}
		}

		return new Matrix(result);
	}

	/**
   * multiply a matrix by a scalar, `matrix` * `scalar`
   */
	scale(this: Matrix, scalar: number): Matrix {
		const result: number[][] = this.data.map((row: number[]) =>
			row.map((val: number) => val * scalar)
		);
		return new Matrix(result);
	}

	/**
   * transpose a matrix by swapping rows and columns
   */
	transpose(this: Matrix): Matrix {
		const result: number[][] = new Array(this.cols)
			.fill(0)
			.map(() => new Array(this.rows).fill(0));

		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				result[j][i] = this.data[i][j];
			}
		}
		return new Matrix(result);
	}

	/**
   * compare tow matrices size
   */
	private static isSameSize(matrix1: Matrix, matrix2: Matrix): boolean {
		return matrix1.rows === matrix2.rows && matrix1.cols === matrix2.cols;
	}

	/**
   * check if the index of row and column is valid
   */
	private static isValidIndex(matrix: Matrix, rowIndex: number, colIndex: number): boolean {
		return (
			rowIndex >= 0 &&
      rowIndex < matrix.rows &&
      colIndex >= 0 &&
      colIndex < matrix.cols
		);
	}

	/**
   * return the size of the matrix
   */
	public size(): { rows: number; cols: number } {
		return { rows: this.rows, cols: this.cols };
	}

	/**
   * return the shape of the matrix
   */
	public shape(): [number, number] {
		return [this.rows, this.cols];
	}

	/**
   * get the value of the matrix at the given row (x-axis) and column (y-axis) (zero-indexed)
   * @param row {number} The x-axis of the matrix
   * @param col {number} The y-axis of the matrix
   */
	public get(row: number, col: number): number {
		if (!Matrix.isValidIndex(this, row, col)) {
			throw new Error("Invalid row or column index.");
		}
		return this.data[row][col];
	}

	/**
   * set the value of the matrix at the given row (x-axis) and column (y-axis) (zero-indexed)
   * @param row {number} The x-axis of the matrix
   * @param col {number} The y-axis of the matrix
   * @param value {number} The value to set at the given row and column
   */
	public set(row: number, col: number, value: number): void {
		if (!Matrix.isValidIndex(this, row, col)) {
			throw new Error("Invalid row or column index.");
		}
		// avoid Prototype-Pollution assisgnment
		this.data[row] = [...this.data[row].slice(0, col), value, ...this.data[row].slice(col + 1)];
		// this.data[row][col] = value;
	}

	/**
   * convert the matrix to an array
   */
	public toArray(): number[][] {
		return [...this.data];
	}

	/**
   * convert the matrix to a flattened array
   */
	public flatten(): number[] {
		return this.data.flat();
	}

	/**
   * make a copy of the matrix
   */
	public clone(): Matrix {
		return new Matrix([...this.data]);
	}

	/**
   * Print the matrix to the `console`
   */
	public log(): void {
		console.log(this.data.map((row) => row.join(" ")).join("\n"));
	}
}
