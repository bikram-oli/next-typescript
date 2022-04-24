import { prependOnceListener } from "process";
import Navigation from "./Navigation";
import ThemeSwitch from "./ThemeSwitch";
import { NextPage } from "next";

interface props {
  children: JSX.Element;
}

const Layout: NextPage<props> = (props) => {
  return (
    <section>
      <div className="bg-dark d-flex justify-content-between">
        <Navigation />
        <ThemeSwitch/>
      </div>
      <main>{props.children}</main>
    </section>
  );
};
export default Layout;
