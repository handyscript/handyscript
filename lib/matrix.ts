/// ------------------------------- HANDY MATRIX © HandyScript 5m/28d/23y -------------------------------

/**
 * implementation of `matrix` operations in typescript/javascript
 */
export default class Matrix {
	private readonly rows: number;
	private readonly cols: number;
	private readonly data: number[][];

	constructor(data: number[][]) {
		if (Array.isArray(data)) {
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
   * add 2 matrices, `matrix1` + `matrix2`
   */
	public static add(matrix1: Matrix, matrix2: Matrix): Matrix {
		if (!Matrix.isSameSize(matrix1, matrix2)) {
			throw new Error("Matrix dimensions must be the same for addition.");
		}

		const result: number[][] = matrix1.data.map((row: number[], i: number) =>
			row.map((val: number, j: number) => val + matrix2.data[i][j])
		);
		return new Matrix(result);
	}

	/**
   * subtract 2 matrices, `matrix1` - `matrix2`
   */
	public static subtract(matrix1: Matrix, matrix2: Matrix): Matrix {
		if (!Matrix.isSameSize(matrix1, matrix2)) {
			throw new Error("Matrix dimensions must be the same for subtraction.");
		}

		const result: number[][] = matrix1.data.map((row: number[], i: number) =>
			row.map((val: number, j: number) => val - matrix2.data[i][j])
		);
		return new Matrix(result);
	}

	/**
   * multiply 2 matrices, `matrix1` * `matrix2`, complexity: `O(n^3)`
   */
	public static multiply(matrix1: Matrix, matrix2: Matrix): Matrix {
		if (matrix1.cols !== matrix2.rows) {
			throw new Error("Matrix dimensions must be the same for multiplication.");
		}

		const result: number[][] = new Array(matrix1.rows)
			.fill(0)
			.map(() => new Array(matrix2.cols).fill(0));

		for (let i = 0; i < matrix1.rows; i++) {
			for (let j = 0; j < matrix2.cols; j++) {
				for (let k = 0; k < matrix1.cols; k++) {
					result[i][j] += matrix1.data[i][k] * matrix2.data[k][j];
				}
			}
		}
		return new Matrix(result);
	}

	/**
   * multiply a matrix by a scalar, `matrix` * `scalar`
   */
	public static scale(matrix: Matrix, scalar: number): Matrix {
		const result: number[][] = matrix.data.map((row: number[]) =>
			row.map((val: number) => val * scalar)
		);
		return new Matrix(result);
	}

	/**
   * transpose a matrix by swapping rows and columns
   * @param {Matrix} matrix - matrix to transpose
   */
	public static transpose(matrix: Matrix): Matrix {
		const result: number[][] = new Array(matrix.cols)
			.fill(0)
			.map(() => new Array(matrix.rows).fill(0));

		for (let i = 0; i < matrix.rows; i++) {
			for (let j = 0; j < matrix.cols; j++) {
				result[j][i] = matrix.data[i][j];
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
