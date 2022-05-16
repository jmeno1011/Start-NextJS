import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href={"/"}>
        <a className={(styles.link, router.pathname === "/" ? "active" : "")}>
          Home
        </a>
      </Link>
      <Link href={"/about"}>
        <a
          className={`${styles.link}
            ${router.pathname === "/about" ? "active" : ""}`}
        >
          About
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
