
import { DivisionByZeroError } from "../../src/error/DivisionByZeroError";
import { Calculator } from "../../src/calculator/Calculator";
import { Operation } from "../../src/constant/Operation";
import { TOKEN_KIND } from "../../src/token/KeyToken";
import { IDisplay } from "../../src/display/IDisplay";
import { setupTestDOM, createDisplayMock, inputDigit } from "../utils/MockAndDom";

describe("------------------------------DivisionByZeroError------------------------------", () => {
    let calculator: Calculator;
    let mockDisplay: jest.Mocked<IDisplay>;   // Jest のモック関数に置き換えられた型

    beforeEach(() => {
        // テスト用に DOM を再構築
        setupTestDOM();

        // モックの作成(RenderDisplayの偽物)
        // モック は Calculator のロジックだけをテスト（単体テスト）
        mockDisplay = createDisplayMock();

        // DOM を作成してから、インスタンス化する
        calculator = new Calculator(mockDisplay);
    });

    test("ケース: デフォルトメッセージ massage「Division by zero」が使用できるか", () => {
        const error = new DivisionByZeroError();

        inputDigit(calculator, 7);
        calculator.handle({ kind: TOKEN_KIND.OP, value: Operation.Divide });
        inputDigit(calculator, 0);
        calculator.handle({ kind: TOKEN_KIND.EQUAL });

        expect(error.message).toBe("Division by zero");
        expect(error.name).toBe("DivisionByZeroError");
        // 「DivisionByZeroError」は「Error」のインスタンスである
        expect(error).toBeInstanceOf(Error);
    });

    test("ケース: カスタムメッセージ name「DivisionByZeroError」が使用できるか", () => {
        const error = new DivisionByZeroError("0で割れません");

        inputDigit(calculator, 7);
        calculator.handle({ kind: TOKEN_KIND.OP, value: Operation.Divide });
        inputDigit(calculator, 0);
        calculator.handle({ kind: TOKEN_KIND.EQUAL });

        expect(error.message).toBe("0で割れません");
        expect(error.name).toBe("DivisionByZeroError");
    });

    test("ケース: throw を catchできるか", () => {
        inputDigit(calculator, 7);
        calculator.handle({ kind: TOKEN_KIND.OP, value: Operation.Divide });
        inputDigit(calculator, 0);
        calculator.handle({ kind: TOKEN_KIND.EQUAL });

        try {
            throw new DivisionByZeroError();
        } catch (err) {
            expect(err).toBeInstanceOf(DivisionByZeroError);
            expect((err as Error).message).toBe("Division by zero");
        }
    });
});