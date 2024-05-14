import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocalStorage } from "usehooks-ts";
import { cn, timeAgo } from "@/lib/utils";
import { DocumentResponse } from "@/types";
import { env } from "@/types/env";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HeartIcon, MessageCircle } from "lucide-react";

type IPostCardProps = {
  data: DocumentResponse;
};
const endpoint = env.VITE_POST_ENDPOINT;

export const PostCard: React.FunctionComponent<IPostCardProps> = ({ data }) => {
  const [likes, setLikes] = useLocalStorage<DocumentResponse[]>("LIKES", []);
  const queryClient = useQueryClient();
  const likeMutation = useMutation({
    mutationKey: ["likePost"],
    mutationFn: () => {
      return fetch(`${endpoint}/${data?.id}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      // Check our cache and update data that has changed
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  const unLikeMutation = useMutation({
    mutationKey: ["unLikePost"],
    mutationFn: () => {
      return fetch(`${endpoint}/${data?.id}/unlike`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  const hasMatchingId = () => {
    return likes.some((element) => element.id === data.id);
  };
  const likePost = () => {
    if (!hasMatchingId()) {
      likeMutation.mutate();
      setLikes((prev) => [...prev, { ...data }]);
    } else {
      unLikeMutation.mutate();
      setLikes((prev) => prev.filter((like) => like.id !== data.id));
    }
  };
  return (
    <Card className="mb-6">
      <CardHeader className=" p-3">
        <CardTitle className="flex items-center space-x-4">
          <span>
            <img
              src={data.image}
              className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover"
            />
          </span>
          <span className="flex-1">{data.username}</span>
          <span className="flex flex-col justify-end font-light text-sm">
            {timeAgo(data.createdAt)}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 ">
        <img src={data.image} />
      </CardContent>
      <CardFooter className="flex flex-col p-3 ">
        <div className="flex justify-between w-full mb-3">
          <HeartIcon
            onClick={() => likePost()}
            className={cn(
              "mr-3",
              "cursor-pointer",
              `${hasMatchingId() ? "fill-red-500" : "fill-white"}`
            )}
          />
          <MessageCircle className="mr-3" />
        </div>
        <div className="w-full text-sm">{data.likes} likes</div>
        <div className="w-full text-sm">
          <span>{data.username}</span>: {data.caption}
        </div>
      </CardFooter>
    </Card>
  );
};
