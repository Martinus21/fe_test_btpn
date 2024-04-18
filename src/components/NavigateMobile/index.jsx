import { Link } from "react-router-dom";

const NavigateMobile = () => {
  return (
    <section className="bg-secondary border-background-default flex lg:hidden justify-center px-3 py-3 fixed z-[9999] left-0 right-0 bottom-0 shadow-[0px_2px_10px_0px_black] h-[66px]">
      <Link className="flex justify-center w-1/5" to="/add">
        <div className="w-[66px] h-[66px] p-2 absolute -top-3 rounded-[19px] flex justify-center items-center bg-gradient-to-br from-primary to-[#1B1B1B]">
          <div>
            <figure className="w-8 h-8 mx-auto opacity-75">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m15.621 2.669-3.69-.58c-3.22-.506-4.83-.76-5.88.139C5 3.126 5 4.756 5 8.016V11h5.92l-2.7-3.375 1.56-1.25 4 5 .5.625-.5.625-4 5-1.56-1.25L10.92 13H5v2.983c0 3.26 0 4.89 1.05 5.788 1.05.898 2.66.645 5.881.14l3.69-.58c1.613-.254 2.419-.38 2.899-.942.48-.561.48-1.377.48-3.01V6.62c0-1.632 0-2.449-.48-3.01-.48-.561-1.286-.688-2.899-.941Z"
                  fill="white"
                ></path>
              </svg>
            </figure>
            <p className="text-center text-[10px] md:text-sm mt-1 lg:mt-0 lg:ml-1">
              Create
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default NavigateMobile;
