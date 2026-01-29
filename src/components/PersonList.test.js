import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import PersonList from "./PersonsList";

describe("70450576", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("should render John and julian", async () => {
    const mAxiosResponse = [
      { personid: 1, nom: "John", prenom: "kylian", age: 21, paysid: "1" },
      { personid: 2, nom: "müller", prenom: "marco", age: 24, paysid: "2" },
    ];
    const mox = jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    await render(<PersonList />);
    await waitFor(() => expect(mox).toHaveBeenCalled());
    //await waitFor(() => expect(screen.getByText("nom")).toBeInTheDocument());
    //await waitFor(() => expect(screen.getByText("prenom")).toBeInTheDocument());
  });
});
