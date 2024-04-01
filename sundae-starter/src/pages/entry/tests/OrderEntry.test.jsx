import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/server.js";

import { render, screen } from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry.jsx";
test.only("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    http.get("http://localhost:3030/scoops", () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get("http://localhost:3030/toppings", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");

  expect(alerts).toHaveLength(2);
});

test("my test 2", () => {});
test("my test 3", () => {});
