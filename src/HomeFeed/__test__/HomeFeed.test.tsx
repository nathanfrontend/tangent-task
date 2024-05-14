import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import { PaginationPosts } from "@/components/postPagination";
import { SetStateAction } from "react";
import "@testing-library/jest-dom/matchers";

// mock server response for the postCard, would then ensure component was populated correctly.
const server = setupServer(
  http.get("http://localhost:4321/api/posts", () => {
    return HttpResponse.json([
      {
        id: 1,
        image: "http://localhost:4321/public/flozza_1.jpg",
        username: "flozza",
        likes: 9999,
        caption: "Hard day at the office 😴",
        createdAt: "2024-05-14T18:59:14.693Z",
        updatedAt: "2024-05-14T18:59:14.693Z",
      },
    ]);
  })
);

// Enable request interception.
beforeAll(() => server.listen());

// Reset handlers so that each test could alter them
// without affecting other, unrelated tests.
afterEach(() => server.resetHandlers());

// Don't forget to clean up afterwards.
afterAll(() => server.close());
describe("HomeFeed", () => {
  it("previous button should be disabled in paginated component", () => {
    render(
      <PaginationPosts setOffset={setOffset} limit={10} total={20} offset={0} />
    );
    const previousButton = screen.getByRole("button", {
      name: "Go to previous page",
    });
    expect(previousButton).toBeDisabled();
    screen.debug();
  });

  it("next button should be disabled in paginated component if theres no more data to fetch", () => {
    render(
      <PaginationPosts
        setOffset={setOffset}
        limit={10}
        total={20}
        // if offset = limit set up variables to do so
        offset={10}
      />
    );
    const previousButton = screen.getByRole("button", {
      name: "Go to next page",
    });
    expect(previousButton).toBeDisabled();
    screen.debug();
  });
});
function setOffset(): SetStateAction<number> {
  throw new Error("Function not implemented.");
}
