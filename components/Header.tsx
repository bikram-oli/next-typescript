import { Fragment } from "react";
import { Icon } from "@iconify/react";

const Header = (): JSX.Element => {
  return (
    <Fragment>
      <div className="header text-center my-5">
        <h1 className="header__title text-dark">
          10 OF THE MOST COLORFUL PLACES IN ASIA
        </h1>
        <p className="header__description text-secondary">
          Happier days are ahead! For now, virtually escape to these 10 cheerful
          places.
        </p>
      </div>
    </Fragment>
  );
};
export default Header;
