
import { RenderDisplay } from "../../src/display/DomDisplay";

// テスト用に DOM を再構築する関数
function setupDOM() {
    document.body.innerHTML = `
    <div id="result"></div>
    
    <div id="history-one"></div>
    <div id="history-operator"></div>
    <div id="history-two"></div>
    `;
}

// describeによるグループ化(テストの可読性とメンテナンス性の向上)
describe("----------------------------------------①異常系処理----------------------------------------", () => {
    // テストの準備や初期化を各テストの前に毎回行う(変数の初期化、モックの作成など)→これにより、各テストケースが同じ状態からスタートできる
    beforeEach(() => {
        setupDOM();

        // 画面がクリアな状態からテストを始める
        // clearResult();
    });

    test("render() が result の textContent を更新する", () => {
        const display = new RenderDisplay();
        display.render("123");

        const resultEl = document.getElementById("result");
        expect(resultEl!.textContent).toBe("123");
    });
});