import "@testing-library/dom";
import {
  afterAll,
  beforeAll,
  expect,
  it,
  afterEach,
  describe,
  beforeEach,
} from "vitest";
import { screen, render, fireEvent, cleanup } from "./setup";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { data } from "@/__mocks__/locations";
import App from "@/App";

const endpoint = import.meta.env.VITE_LOCATIONS_ENDPOINT;

const server = setupServer(http.get(endpoint, () => HttpResponse.json(data)));

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  render(<App />);
  const radioBtn = screen.getByRole("radio", { name: "Manhã" });
  fireEvent.click(radioBtn);
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => server.close());

describe("Form Component", () => {
  it("should render fetched cards with morning schedule", () => {
    expect(screen.findByText("Rua Barão de Jaguara, 1234")).toBeTruthy();
  });

  it("should not render card if show closed isn't checked", async () => {
    fireEvent.click(screen.getByText("Encontrar unidade"));
    await screen.findByRole("list");
    const card = screen.queryByText("Rua Siqueira Campos, 1545");
    expect(card).toBeNull();
  });

  it("should render card with show closed checked", async () => {
    const checkbox = screen.getByRole("checkbox", {
      name: "Exibir unidades fechadas",
    });
    fireEvent.click(checkbox);
    fireEvent.click(screen.getByText("Encontrar unidade"));
    expect(
      screen.findByText(/Rua Siqueira Campos, 1545 – Vila Roberto/),
    ).toBeTruthy();
  });
});
