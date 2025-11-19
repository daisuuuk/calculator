
import { TOKEN_KIND, KeyToken } from "../../src/token/KeyToken";
import { Operation } from "../../src/constant/Operation";

// テスト用に DOM を再構築する関数
// function setupDOM() {
//     document.body.innerHTML = `
//     <div id="result"></div>
    
//     <div id="history-one"></div>
//     <div id="history-operator"></div>
//     <div id="history-two"></div>
//     `;
// }

// describeによるグループ化(テストの可読性とメンテナンス性の向上)
describe("------------------------------KeyToken------------------------------", () => {
    // テストの準備や初期化を各テストの前に毎回行う(変数の初期化、モックの作成など)→これにより、各テストケースが同じ状態からスタートできる
    // beforeEach(() => {
    //     setupDOM();

    //     // 画面がクリアな状態からテストを始める
    //     // clearResult();
    // });

    test("ケース : TOKEN_KIND の値が正しいか", () => {
        expect(TOKEN_KIND.DIGIT).toBe("digit");
        expect(TOKEN_KIND.DECIMAL).toBe("decimal");
        expect(TOKEN_KIND.OP).toBe("op");
        expect(TOKEN_KIND.EQUAL).toBe("equal");
        expect(TOKEN_KIND.CLEAR).toBe("clear");
    });

    test("ケース : 数字 KeyTokenが正しく生成できるか", () => {
        const token: KeyToken = {
            kind: TOKEN_KIND.DIGIT,
            value: 1,
        };

        expect(token.kind).toBe("digit");
        expect(token.value).toBe(1);
    });

    test("ケース : 小数点 KeyTokenが正しく生成できるか", () => {
        const token: KeyToken = {
            kind: TOKEN_KIND.DECIMAL,
        };

        expect(token.kind).toBe("decimal");
    });

    test("ケース : 演算子 KeyTokenが正しく生成できるか", () => {
        const token: KeyToken = {
            kind: TOKEN_KIND.OP,
            value: Operation.Add,
        };

        expect(token.kind).toBe("op");
        expect(token.value).toBe(Operation.Add);
    });

    test("ケース : 「=」 KeyTokenが正しく生成できるか", () => {
        const token: KeyToken = {
            kind: TOKEN_KIND.EQUAL,
        };

        expect(token.kind).toBe("equal");
    });

    test("ケース : 「C」 KeyTokenが正しく生成できるか", () => {
        const token: KeyToken = {
            kind: TOKEN_KIND.CLEAR,
        };

        expect(token.kind).toBe("clear");
    });

    // test("ケース : ", () => {

    // });
});