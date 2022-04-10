import React from "react"
import Container from "./style"
import Link from "next/link"

const Nav = () => {
  return (
    <Container>
      <Link href="/">Home</Link>
      <Link href="/List">List</Link>
      <Link href="">Settings</Link>
      <Link href="">About</Link>
    </Container>
  )   
}

export default Nav
