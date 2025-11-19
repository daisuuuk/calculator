
export class InputBuffer {
    constructor(private readonly maxDigits: number, private value = "") { }

    public pushDigit(d: string): void {
        // 小数点は桁数制限に含めない
        // なぜ: 8桁入力制限にするため　/ 前提条件: 9桁目が入力された時　①
        if (this.digitCount() >= this.maxDigits) {
            return;
        }

        // なぜ: 小数点入力制限のため（１個のみ） / 前提条件: 小数点が入力されている時　②
        if (d === "." && this.value.includes(".")) {
            return;
        }

        // 先頭が "0" で次に数字が入力された場合 → 上書き　③
        if (this.value === "0") {
            this.value = d.toString();
        }

        this.value += d;
    }

    public pushDecimal(): void {
        // なぜ： "0."のように"0"補完をするため / 前提条件： 小数点が入力された時
        if (this.value === "") {
            this.value = "0.";
        } else if (!this.value.includes(".")) {   // 値があれば値と"."を「 10. 」
            this.value += ".";
        }
        console.log(this.value);
    }

    public clear(): string {
        return this.value = "";
    }

    public toNumber(): number {
        // 「this.valueが falsy（空文字, null, undefined など）」のときは、代わりに 0 を使う(number型で返す)
        return Number(this.value || 0);
    }

    public getValueByString(): string {   // (string型で返す)
        return this.value;
    }

    public isEmpty(): boolean {
        // 文字列が空なら trueを返すことで、「入力があるかどうか」を確認するメソッド
        return this.value.length === 0;
    }

    public toString(): string {
        return this.value;
    }

    // なぜ: 「./-」 を除いた数値の長さを取得するため。 前提条件: 「./-」 が入力されている状態
    public digitCount(): number {
        return this.value.replace(/[.\-]/g, "").length;
    }

    // 小数点入力（0. など）、空・NaN・符号だけで = 押下してもクリアされない為のメソッド
    public hasValue(): boolean {
        const trimmed = this.value.toString();   // 文字列を返し
        // 「-」単独や空文字は無効とみなす()
        if (trimmed === "" || trimmed === "-") {
            return false;
        }
        const t = Number(trimmed);       // number型へ またparseFloat()の仕様で "." はNaN
        return !isNaN(t);                    // NaNではないものを返す → NaNなので false を返す
    }
}