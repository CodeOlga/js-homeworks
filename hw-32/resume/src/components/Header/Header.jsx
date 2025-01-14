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
        <Link href="/todo">Todo</Link>
      </li>
      <li>
        <Link href="/swapi">Swapi</Link>
      </li>
    </ul>

    <Toggle />
  </header>
);

export default Header;
