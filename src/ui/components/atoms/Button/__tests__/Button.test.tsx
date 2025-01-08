import { renderProvider } from "@/__tests__/renderProvider";
import { Button } from "../Button";
import "@testing-library/jest-dom";

test("Button renders correctly", () => {
  const { getByText } = renderProvider(
    <Button variant="primary">Click me</Button>
  );
  expect(getByText("Click me")).toBeInTheDocument();
});
