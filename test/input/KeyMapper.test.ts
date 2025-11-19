
import { KeyMapper } from "../../src/input/KeyMapper";
import { TOKEN_KIND } from "../../src/token/KeyToken";
import { Operation } from "../../src/constant/Operation";

// public resolve(target: HTMLElement): KeyToken | undefined { ... } のモック箇所
function mockButton(key: string): HTMLElement {
    const btn = document.createElement("button");
    btn.dataset.key = key;
    btn.innerText = key;
    return btn;
}

describe("------------------------------KeyMapper------------------------------", () => {
    // テストの準備や初期化を各テストの前に毎回行う(変数の初期化、モックの作成など)→これにより、各テストケースが同じ状態からスタートできる
    beforeEach(() => {
        const mapper = new KeyMapper();

        test("ケース: 数字 を正しく処理する", () => {
            const btn = mockButton("5");
            const token = mapper.resolve(btn);

            expect(token).toEqual({
                kind: TOKEN_KIND.DIGIT,
                value: 5,
            });
        });

        test("ケース: 数字 を正しく処理する", () => {

        });

        test("ケース: 数字 を正しく処理する", () => {

        });

        test("ケース: 数字 を正しく処理する", () => {

        });
    });
});