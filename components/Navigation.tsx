import Link from "next/link";


const Navigation = (): JSX.Element => {
  return (
    <nav className="navbar p-3">
      <Link href="/">
        <a className="navbar__link text-white ps-5">Home</a>
      </Link>
      <Link href="/about">
        <a className="navbar__link text-white ps-5">About</a>
      </Link>
    </nav>
  );
};
export default Navigation;
