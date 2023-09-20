import React from 'react'
import Link from 'next/link'
import Logo from './logo'

export default function MainNavigation() {
  return (
    <header>
      <Link href='/'>
      <Logo />
      <Link/>
      <nav>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
          </li>
          <li>
          <Link href="/contact">Posts</Link>
        </li>
        <ul/>
      </nav>
    </header>
  );
}
