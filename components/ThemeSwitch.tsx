import React, { useState } from "react";
import { Fragment } from "react";
import { Icon } from "@iconify/react";

const ThemeSwitch = (): JSX.Element => {
  const [mode, setMode] = useState(true);

  const handleClick = (e: any) => {
    e.preventDefault();
    setMode(!mode);
    console.log(mode);
  };

  return (
    <Fragment>
      <div className="btn btn-primary-outline" onClick={handleClick}>
        {mode ? (
          <Icon className="themeicon text-white" icon="akar-icons:sun" />
        ) : (
          <Icon className="themeicon text-white" icon="bytesize:moon" />
        )}
      </div>
    </Fragment>
  );
};
export default ThemeSwitch;
