import { render, screen } from "@testing-library/react";
import Select from "./react-library/src/Select";

//verifier que le composant est bien rendu :

test("renders Select component", () => {
  render(<Select />);
  const selectComponent = screen.getByTestId("selectComponent");
  expect(selectComponent).toBeInTheDocument();
});
