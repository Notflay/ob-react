// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from "@testing-library/react";
import Tasklist from "./TaskList";

// 0 - Renderiza el componente
describe("0 - Renderiza el componente", () => {
    test("0 - Renderiza el componente", () => {
        const r = render(<Tasklist />);
        expect(r).toBeDefined();
    });
});

