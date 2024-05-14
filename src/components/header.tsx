import { DogIcon, Link, LogInIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-gray-100 py-4 dark:bg-gray-900 z-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 items-center text-xl hover:underline"
        >
          <DogIcon />
          doggo.io
        </Link>

        <nav className="flex gap-8">
          <>
            <Button variant="link">Browse</Button>

            <Button variant="link">Your Posts</Button>
          </>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="link">
            <LogInIcon className="mr-2" /> Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
