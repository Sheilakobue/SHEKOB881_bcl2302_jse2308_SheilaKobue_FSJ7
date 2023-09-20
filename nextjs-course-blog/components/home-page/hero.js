import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

// welcome page
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sheila.png" // Remove /public from the path
          alt="An image showing Sheila"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Sheila</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}
