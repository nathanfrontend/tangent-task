import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "./ui/button";

type PaginationPostsProps = {
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  total: number;
  offset: number;
};
export function PaginationPosts({
  setOffset,
  limit,
  total,
  offset,
}: PaginationPostsProps) {
  const Pages = () =>
    Array.from({ length: total / limit }, (_, index: number) => (
      <PaginationItem key={index}>
        <Button
          variant="link"
          onClick={() => setOffset(limit * index)}
          disabled={index === offset / limit}
        >
          <PaginationLink
            isActive={index === offset / limit}
            className="text-black"
          >
            {index + 1}
          </PaginationLink>
        </Button>
      </PaginationItem>
    ));
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="link"
            disabled={offset === 0}
            onClick={() => setOffset((prev) => prev - limit)}
          >
            <PaginationPrevious />
          </Button>
        </PaginationItem>
        <Pages />
        <PaginationItem>
          <Button
            variant="link"
            disabled={offset === limit}
            onClick={() => setOffset((prev) => prev + limit)}
          >
            <PaginationNext />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
