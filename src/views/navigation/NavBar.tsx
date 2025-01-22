import { Link } from "react-router-dom";
import { Home, Folder } from "lucide-react";

interface NavBarProps {
  logo?: string;
  onHomeClick?: () => void;
  onProjectsClick?: () => void;
}

const NavBar = ({
  onHomeClick = () => {},
  onProjectsClick = () => {},
}: NavBarProps) => {
  return (
    <nav className="bg-white text-black/90 w-full">
      <div className="max-w-7xl mx-auto flex justify-center items-center p-4">
        <div className="w-full mx-auto justify-center flex space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-gray-300"
            onClick={onHomeClick}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/projects"
            className="flex items-center space-x-2 hover:text-gray-300"
            onClick={onProjectsClick}
          >
            <Folder className="w-5 h-5" />
            <span>Projects</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
