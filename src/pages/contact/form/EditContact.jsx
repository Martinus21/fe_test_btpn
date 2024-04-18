import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// IMPORT REDUX
import { useDispatch, useSelector } from "react-redux";
import { editContact, getOneContact } from "../../../stores";

const EditContactPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { contactID } = useParams();
  
  const dataContact = useSelector(
    (state) => state.contactReducer.detailContact
  );

  useEffect(() => {
    getOneContact(dispatch, contactID);
  }, [dispatch, contactID]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [namePhoto, setNamePhoto] = useState("");

  const fileToBlob = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  const onChangePhoto = (file) => {
    setNamePhoto(file.name);
    if (!file) {
      setPhoto("");
      return;
    }
    fileToBlob(file).then((photo) => {
      setPhoto(photo);
    });
  };

  const onClickEditContact = (e) => {
    editContact(
      dispatch,
      {
        firstName: firstname !== ""? firstname : dataContact?.data.firstName,
        lastName: lastname !== ""? lastname : dataContact?.data.lastName,
        age: age !== ""? age : dataContact?.data.age,
        photo: photo !== ""? photo : dataContact?.data.photo,
      },
      navigate,
      contactID
    );
  };

  return (
    <section className="lg:bg-background-tertiary min-h-content pb-16 lg:pb-0">
      <div className="container mx-auto md:py-4 lg:py-8 lg:px-3">
        {/* BACK */}
        <div className="w-full lg:w-2/3 lg:px-5">
          <div className="px-2 my-2">
            <Link className="flex items-center" to="/">
              <figure className="h-auto w-6 rotate-180">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="var(--base)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m15 12 .354-.354.353.354-.353.354L15 12ZM9.354 5.646l6 6-.708.708-6-6 .708-.708Zm6 6.708-6 6-.708-.708 6-6 .708.708Z"
                    fill="var(--base)"
                  ></path>
                </svg>
              </figure>
              <span className="text-sm">Kembali</span>
            </Link>
          </div>
        </div>
        {/* END BACK */}

        {/* FORM */}
        <div className="bg-background-default rounded-2xl p-4 lg:px-10 mx-auto md:w-4/5 lg:w-3/5">
          <div className="flex -mx-1">
            {/* FIRSTNAME */}
            <div className="w-1/2 mr-1 relative mt-4 lg:mt-5 rounded-xl group border border-separator focus-within:border-primary focus-within:ring-1">
              <div className="absolute left-0 -top-4 lg:-top-[14px] mx-2 z-20 bg-background-default ">
                <label className="text-white text-[10px] lg:text-xs opacity-70 px-1  bg-background-default rounded-full ">
                  First Name
                </label>
              </div>
              <div className="relative">
                <input
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder={`${dataContact?.data.firstName}`}
                  label="First Name"
                  className="p-3 text-sm lg:text-base w-full rounded-lg border bg-transparent border-transparent focus:outline-none"
                  type="text"
                />
              </div>
            </div>
            {/* END FIRSTNAME */}

            {/* LASTNAME */}
            <div className="w-1/2 ml-1 relative mt-4 lg:mt-5 rounded-xl group border border-separator focus-within:border-primary focus-within:ring-1">
              <div className="absolute left-0 -top-4 lg:-top-[14px] mx-2 z-20 bg-background-default ">
                <label className="text-white text-[10px] lg:text-xs opacity-70 px-1  bg-background-default rounded-full ">
                  Last Name
                </label>
              </div>
              <div className="relative">
                <input
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  label="Last Name"
                  placeholder={`${dataContact?.data.lastName}`}
                  className="p-3 text-sm lg:text-base w-full rounded-lg border bg-transparent border-transparent focus:outline-none"
                  type="text"
                />
              </div>
            </div>
            {/* END LASTNAME */}
          </div>

          {/* AGE */}
          <div className="flex -mx-1">
            <div className="w-3/12 mr-1">
              <div className="relative mt-4 lg:mt-5 rounded-xl group border border-separator focus-within:border-primary focus-within:ring-1">
                <div className="absolute left-0 -top-4 lg:-top-[14px] mx-2 z-20 bg-background-default ">
                  <label className="text-white text-[10px] lg:text-xs opacity-70 px-1  bg-background-default rounded-full ">
                    Age
                  </label>
                </div>
                <div className="relative">
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    label="Age"
                    placeholder={`${dataContact?.data.age}`}
                    className="text-white p-3 text-sm lg:text-base w-full rounded-lg border bg-transparent border-transparent focus:outline-none"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* END AGE */}

          {/* UPLOAD PHOTO */}
          <div className="flex -mx-1 mt-5">
            <div className="w-full">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="text-center">{namePhoto}</p>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={(e) => onChangePhoto(e.target.files[0] || null)}
                  />
                </label>
              </div>
            </div>
          </div>
          {/* END UPLOAD PHOTO */}

          <div className="flex justify-center my-4">
            <button
              onClick={() => onClickEditContact()}
              aria-label="Button Registration Form"
              aria-labelledby="Button Registration Form"
              className="bg-primary lg:hover:brightness-95 text-white rounded-xl text-sm lg:text-base font-semibold w-full lg:w-1/2 justify-center py-3"
            >
              Edit Contact
            </button>
          </div>
        </div>
        {/* END FORM */}
      </div>
    </section>
  );
};

export default EditContactPage;
