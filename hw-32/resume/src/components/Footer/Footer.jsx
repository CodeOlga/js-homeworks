import Link from "../Link/Link";

const Footer = () => (
  <footer className="footer">
    <h1>OlgaK</h1>
    <ul>
      <li>
        Phone number: <Link href="tel:+123456789">+380991234567</Link>
      </li>
      <li>
        Email: <Link href="mailto: myemail@gmail.com">myemail@gmail.com</Link>
      </li>
      <li>
        GitHub:{" "}
        <Link href="https://github.com/CodeOlga">https://github.com/</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
