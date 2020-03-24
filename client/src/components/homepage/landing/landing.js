import React from "react";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <section id="landing" className="landing">
        <div className="landing__items">
          <h1 className="landing__items__item landing__items__header">
            Be the best with Prodiwork
          </h1>
          <Link href="/users/signup">
            <a className="landing__items__item landing__items__button">
              <p>Get Started</p>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Landing;
