import Link from "next/link";
import {Box, Link as MUILink} from '@material-ui/core';
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import React from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <Box className={"container " + (active ? "active" : "")} style={{display: 'flex', flexDirection: "column", padding: '20px'}}>
        <MUILink href="/" className={router.pathname === "/" ? "active" : null}>about</MUILink>
        <MUILink href="/posts" className={router.pathname === "/" ? "active" : null}>blog</MUILink>
      </Box>
    </>
  );
}
