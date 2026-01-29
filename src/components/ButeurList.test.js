import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import ButeursList from "./ButeursList";

jest.mock("axios");

describe("70450576", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("should render John and julian", async () => {
    const mAxiosResponse = [
      { buteurid: 1, joueurid: 1, nom: "John", prenom: "kylian", buts: 7 },
      { id: 2, joueurid: 2, nom: "alvarez", prenom: "julian", buts: 4 },
    ];
    const mox = jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    render(<ButeursList />);
    await waitFor(() => {
      expect(mox).toHaveBeenCalled();
      //expect(mox2).toHaveLength(2);
      //expect(mox2).toBe(mAxiosResponse);
    });
  });
});

describe("test mock data", () => {
  it("should return buteurs list", async () => {
    // given
    const mAxiosResponse = [
      { buteurid: 1, joueurid: 1, nom: "John", prenom: "kylian", buts: 7 },
      { id: 2, joueurid: 2, nom: "alvarez", prenom: "julian", buts: 4 },
    ];
    const result = axios.get.mockRejectedValueOnce(mAxiosResponse);

    // when
    render(<ButeursList />);

    // then
    expect(axios.get).toHaveBeenCalled();
    expect(result[0]).toEqual(undefined);
  });
});
