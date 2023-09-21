import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="coming__soon flex h-screen items-center">
      <Image
        src="/hero.jpg"
        fill
        className="home__hero-img object-cover"
        alt="hero image"
      />
      <div className="container">
        <div className="home__hero-inner">
          <div className="home__hero-content">
            <Image
              src="/logo.svg"
              width={276}
              height={221}
              className="hero__logo"
              alt="logo"
            />
            <h1 className="hero__title">
              We <span className="text__underline">Prepare</span> For Life.
            </h1>
            <h4 className="hero__subtitle">Website coming soon</h4>
            <Link href="/" className="app__button">
              view our prospectus <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
