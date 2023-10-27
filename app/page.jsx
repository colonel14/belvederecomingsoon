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
            <div className="mt-[42px] flex flex-col md:flex-row items-center justify-center gap-5 gap-y-5">
              <Link href="https://lms.belvedereschoolcairo.com/en/applicantregister/register" className="app__button apply__button" >
                Apply Now <ChevronRight />
              </Link>
              <Link href="/Prospectus.pdf" className="app__button" target="blank">
                 our prospectus <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
