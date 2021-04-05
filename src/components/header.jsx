import React from "react";
import Link from "next/link";
import headerStyles from "./header.module.scss";

const Header = ({ title, links }) => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>{title}</h1>
      {links.map(({ label, link, external }) =>
        external ? (
          <a key={label} href={link}>
            {label}
          </a>
        ) : (
          <Link key={label} href={link}>
            {label}
          </Link>
        )
      )}
    </header>
  );
};

export default Header;
