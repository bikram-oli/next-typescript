import { Fragment } from "react";
import { Icon } from '@iconify/react';

const Header = (): JSX.Element => {
  return (
    <Fragment>
      <div className="header text-center my-5">
        <h1 className="header__title text-dark">This is Header</h1>
        <p className="header__description text-secondary">
          Here you can display description of header
        </p>
        <div className="">
        <Icon className="text-primary" icon="akar-icons:sun" />
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
