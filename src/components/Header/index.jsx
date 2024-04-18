import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      id="header"
      className="fixed z-[97] left-0 right-0 bg-secondary transition-all duration-500 ease-out top-0"
    >
      <section className="container mx-auto px-3 lg:h-[66px]">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="h-6 lg:h-8 w-auto">Contact</h1>
            </Link>
          </div>
          <div className="hidden lg:flex">
            <Link
              to="/add"
              className="bg-primary px-2 py-1 text-sm justify-center rounded-lg mx-1 h-full min-w-[56px] min-h-[34px] text-white hover:lg:brightness-90 transition-all duration-300 ease-in-out"
            >
              <h1 className="w-auto">Add Contact</h1>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
