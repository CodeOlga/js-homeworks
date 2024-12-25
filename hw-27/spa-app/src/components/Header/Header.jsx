import Link from "../Link/Link";
import Toggle from "../Toggle/Toggle";

const Header = () => (
  <header className="header">
    <h1>OlgaK</h1>
    <ul className="header__logo">
      <li>
        <Link href="/">Main</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contacts">Contacts</Link>
      </li>
    </ul>

    <Toggle />
  </header>
);

export default Header;
