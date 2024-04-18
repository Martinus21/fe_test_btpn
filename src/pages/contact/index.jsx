import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// IMPORT REDUX
import { useDispatch, useSelector } from "react-redux";
import { getOneContact } from "../../stores";

const DetailContactPage = (props) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const dataContact = useSelector(
    (state) => state.contactReducer.detailContact
  );

  useEffect(() => {
    getOneContact(dispatch, id);
  }, [dispatch, id]);

  return (
    <>
      {/* CARD */}
      <div className="flex justify-center flex-wrap lg:mx-0 px-4 lg:px-0 py-10 pb-20 lg:pb-0 relative">
          <div className="w-full max-w-sm bg-tertiary border border-primary rounded-lg shadow">
            <div className="flex flex-col items-center pb-10 mt-5">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={`${dataContact?.data.photo}`}
                alt="profile"
              />
              <h5 className="mb-1 text-xl font-medium text-primary">
                {dataContact?.data.firstName} {dataContact?.data.lastName}
              </h5>
              <span className="text-sm text-white-500 dark:text-white-400">
                {dataContact?.data.age} y.o
              </span>
              <div className="mt-4 md:mt-6">
                <Link
                  to={"/"}
                  className="py-2 px-4 ms-2 text-sm font-medium bg-primary lg:hover:brightness-95 text-white rounded-xl text-sm lg:text-base font-semibold w-full lg:w-1/2 justify-center py-3"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
      </div>
      {/* END CARD */}
    </>
  );
};

export default DetailContactPage;
