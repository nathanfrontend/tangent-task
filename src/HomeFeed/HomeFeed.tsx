import { ErrorAlert } from "@/components/alert";
import { PostCard } from "@/components/postCard";
import { PaginationPosts } from "@/components/postPagination";
import { SkeletonCard } from "@/components/skeletonCard";
import { DocumentResponse } from "@/types";
import { env } from "@/types/env";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// .env for endpoint which will be accessible, for yourself using gitignore - othe otherwise would be ignored
const endpoint = env.VITE_POST_ENDPOINT;
const HomeFeed = () => {
  const [offset, setOffset] = useState<number>(0);
  // fetch data using react-query
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", offset],
    queryFn: () =>
      fetch(`${endpoint}?limit=10&offset=${offset}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      }),
  });

  return (
    <div className="flex flex-col ">
      <div className="mb-5">
        <div className="w-full flex justify-center">
          <div className="flex flex-col max-w-sm rounded-sm overflow-hidden animate-fadeIn">
            {error && <ErrorAlert message={error.message} />}
            {isLoading && <SkeletonCard />}
            {data?.posts.length === 0 && (
              <div className="flex flex-col gap-4 justify-center items-center mt-24">
                <img
                  loading="lazy"
                  src="/no-data.svg"
                  className="h-[200px] w-[200px]"
                  alt="no data image"
                />

                <h2 className="text-2xl">No Posts Yet, try refresh</h2>
              </div>
            )}
            {data?.posts.length > 0 &&
              data.posts.map((item: DocumentResponse) => (
                <PostCard data={item} key={item.id} />
              ))}

            {data?.posts.length > 0 && (
              <PaginationPosts
                setOffset={setOffset}
                limit={data?.limit}
                total={data?.total}
                offset={offset}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
