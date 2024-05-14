import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, timeAgo } from "@/lib/utils";
import { DocumentResponse } from "@/types";
import { HeartIcon, MessageCircle } from "lucide-react";

type IPostCardProps = {
  data: DocumentResponse;
};
export const PostCard: React.FunctionComponent<IPostCardProps> = ({ data }) => {
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
          <HeartIcon className={cn("mr-3", "cursor-pointer", "fill-red-500")} />
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
