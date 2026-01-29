import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", async () => {
  const { container } = await render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  /*  await waitFor(() => {
    const navBAr = screen.getByText("");
    expect(navBAr).toBeInTheDocument();
  }); */
  const element = container("");
  expect(element).toBeInTheDocument();
});
