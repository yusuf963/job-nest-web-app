import React from "react";

const Alert = ({title,subTitle, level }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  const attention = {
      success:"bg-emerald-500",
      warn:"bg-orange-500",
      info:"bg-lightBlue-500",
      fail:"bg-red-500",
      blueGray:"bg-blueGray-500"
  }
  return (
    <>
      {showAlert ? (
        <div
          className={`text-white px-6 py-4 border-0 rounded relative mb-4 ${attention[level]}`}
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="px-6 fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">{" "} {title}</b> {subTitle}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span className="px-6">×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alert;