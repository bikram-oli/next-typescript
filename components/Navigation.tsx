import Link from "next/link";


const Navigation = (): JSX.Element => {
  return (
    <nav className="navbar p-3">
      <Link href="/">
        <a className="navbar__link text-white ms-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="navbar__link text-white ms-4">About</a>
      </Link>
    </nav>
  );
};
export default Navigation;
