import Link from "../Link/Link";

const Footer = () => (
  <footer className="footer">
    <h1>OlgaK</h1>
    <ul>
      <li>
        Phone number: <Link href="tel:+123456789">+123456789</Link>
      </li>
      <li>
        Email:{" "}
        <Link href="mailto: someone@example.com">someone@example.com</Link>
      </li>
      <li>
        GitHub:{" "}
        <Link href="https://github.com/CodeOlga">https://github.com/</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
