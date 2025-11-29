
import { IDisplay } from "../../src/display/IDisplay";
import { Calculator } from "../../src/calculator/Calculator";
import { TOKEN_KIND } from "../../src/token/KeyToken";

export function setupTestDOM(): void {
    // テスト用に DOM を再構築
    document.body.innerHTML = `
        <div id="result"></div>
        <div id="history-one"></div>
        <div id="history-operator"></div>
        <div id="history-two"></div>
    `;
}

export function createDisplayMock(): jest.Mocked<IDisplay> {
    return {
        // モックの作成(RenderDisplayの偽物)
        // モック は Calculator のロジックだけをテスト（単体テスト）
        render: jest.fn(),
        renderError: jest.fn(),
        displayHistoryOne: jest.fn(),
        displayHistoryOperator: jest.fn(),
        displayHistoryTwo: jest.fn(),
    };
}

// なぜ： ヘルパー関数を要して、`Calculator.ts`の`private`に対応するため
export function inputDigit(calculator: Calculator, digit: number): void {
    calculator.handle({ kind: TOKEN_KIND.DIGIT, value: digit });
}
