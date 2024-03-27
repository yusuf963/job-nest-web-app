import React from "react";

import CardSettings from "components/Loggedin/CardSettings";
import CardProfile from "components/Loggedin/CardProfile.js";

import Loggedin from "layouts/Loggedin";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.layout = Loggedin;