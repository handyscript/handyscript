//// ------------------------------- HANDY NUMBER © HandyScript 6m/2d/23y -------------------------------

declare global {
    interface Number {
        /**
         * Returns a string representation of a number in human readable format. like 1K, 1M, 1B, 1T, etc.
         */
        toHuman(): string;

        /**
         * Returns a string representation of a number readable format. like 10-000, 1-000-000, 1-000-000-000, etc.
         * @param separator The separator to be used. Default is `-`
         */
        toReadable(separator?: string): string;
    }
};

Number.prototype.toHuman = function (): string {
    const num = this.valueOf();
    const si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "K" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "B" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) if (num >= si[i].value) break;
    return (num / si[i].value).toFixed(2).replace(rx, "$1") + si[i].symbol;
};

Number.prototype.toReadable = function (separator: string = "-"): string {
    const num = this.valueOf();
    const rx = /(\d+)(\d{3})/;
    return String(num).replace(/^\d+/, function (w) {
        while (rx.test(w)) {
            w = w.replace(rx, "$1" + separator + "$2");
        }
        return w;
    });
};

export default Number;