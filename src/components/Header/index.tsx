"use client";
import Link from "next/link";

import * as Styled from "./index.styled";

const Header = () => {
  return (
    <Styled.Container>
      <Link href={"/"}>
        <Styled.Image
          aria-hidden
          src="/ds_bg.jpg"
          alt="drako schule logo"
          width={60}
          height={60}
        />
      </Link>
      <Styled.Navigation>
        <Styled.NavLink href={"/groups"}>Groups</Styled.NavLink>
      </Styled.Navigation>
    </Styled.Container>
  );
};

export default Header;
