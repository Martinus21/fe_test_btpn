import React, { useEffect } from "react";

// IMPORT REDUX
import { useDispatch, useSelector } from "react-redux";

// IMPORT STORES
import { deleteContact, getAllContact } from "../../stores";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const dataContactList = useSelector(
    (state) => state.contactReducer.listContact
  );

  useEffect(() => {
    getAllContact(dispatch);
  }, [dispatch]);

  return (
    <>
      <section className="container mx-auto lg:pb-20 flex flex-wrap">
        {/* CARD CONTACT */}
        {dataContactList?.map((datas, index) => {
          return (
            <div key={index} className="w-full rounded px-3 mt-3 order-1">
              <div className="bg-secondary rounded p-4 flex items-center">
                <div className="group w-[66px] mr-5">
                  <img
                    src={`${datas.photo}`}
                    className="rounded"
                    alt="profile"
                  />
                </div>
                <div className="w-[calc(100%-58px)] overflow-hidden inline-block">
                  <div className="textNama text-lg z-[9]">
                    <h2>{datas.firstName}</h2>
                  </div>
                  <div className="textUmur pt-1 pb-1">
                    <label className="bg-green-500 text-xs p-1 rounded">{datas.age} y.o</label>
                  </div>
                </div>
                <div className="group mx-1">
                  <Link to={`/detail/${datas.id}`} className="btn-transparent hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500 hover:border-transparent rounded px-3 py-2">
                    Detail
                  </Link>
                </div>
                <div className="group mx-1">
                  <Link to={`/edit/${datas.id}`}  className="btn-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white border border-yellow-500 hover:border-transparent rounded px-3 py-2">
                    Edit
                  </Link>
                </div>
                <div className="group mx-1">
                  <button className="btn-transparent hover:bg-red-500 text-red-500 hover:text-white border border-red-500 hover:border-transparent rounded px-3 py-2" onClick={() => deleteContact(dispatch, datas.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* END CARD CONTACT */}
      </section>
    </>
  );
};

export default HomePage;
