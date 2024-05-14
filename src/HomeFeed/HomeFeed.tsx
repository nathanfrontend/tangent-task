import { PostCard } from "@/components/postCard";

const HomeFeed = () => {
  const data = [
    {
      id: 1,
      image: "http://localhost:4321/public/flozza_1.jpg",
      username: "flozza",
      likes: 9999,
      caption: "Hard day at the office 😴",
      createdAt: "2024-05-13T13:59:24.896Z",
      updatedAt: "2024-05-13T13:59:24.896Z",
    },
  ];
  return (
    <div className="flex flex-col ">
      <div className="mb-5">
        <h2 className="mb-5">Feed</h2>
        <div className="w-full flex justify-center">
          <div className="flex flex-col max-w-sm rounded-sm overflow-hidden">
            <PostCard data={data[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
