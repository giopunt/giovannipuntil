import clsx from 'clsx';
import Image from 'next/image';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SocialLink from '../components/Links/Social';
import Card from '../components/Card/Card';
import CardTitle from '../components/Card/Title';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero is-fullheight is-justify-content-flex-start">
        <section className="section is-medium">
          <div className="container is-max-desktop">
            <h1 className="is-size-1 is-size-3-touch	has-text-weight-semibold has-text-black">Ciao! <Image src="/images/hello.png" height={139} width={135} alt="Hello world!" className={clsx(styles.sayHi, styles.inline)} /> my name is Giovanni
              <br /> I am a software engineer.</h1>
            <p className="is-size-3 is-size-4-touch has-text-grey has-text-weight-light mt-3">I find joy in the process of creation, whether physical or virtual.</p>
          </div>
        </section>
        <section id="social-links" className="section">
          <div className="container is-max-desktop">
            <SocialLink href="https://github.com/giopunt" icon="github" label="github" />
            <SocialLink href="https://www.linkedin.com/in/puntilgiovanni/" icon="linkedin" label="LinkedIn" />
            <SocialLink href="https://x.com/giovannipuntil" icon="x.com" label="X (Twitter)" />
          </div>
        </section>
        <section id="things-i-do" className="section">
          <div className="container is-max-desktop">
            <h2 className="is-size-4 is-size-5-touch has-text-weight-semibold has-text-black">Things I do</h2>
            <div className="tile is-ancestor pt-4">
              <Card>
                <CardTitle icon="globe">Web Perf</CardTitle>
                <p className="has-text-grey">Boost your site's speed, enhance user experience, and climb search rankings—effortlessly.</p>
              </Card>
              <Card>
                <CardTitle icon="shopping-bag">e-commerce</CardTitle>
                <p className="has-text-grey">Maximize sales with a website optimized for conversion and customer satisfaction.</p>
              </Card>
              <Card>
                <CardTitle icon="pen-tool">Design & Mockups</CardTitle>
                <p className="has-text-grey">Elevate your website with stunning, user-friendly design.</p>
              </Card>
            </div>
            <div className="tile is-ancestor">
              <Card>
                <CardTitle icon="smartphone">Native Apps</CardTitle>
                <p className="has-text-grey">Create seamless, cross-platform native apps for iOS and Android.</p>
              </Card>
              <Card>
                <CardTitle icon="trending-up">SEO</CardTitle>
                <p className="has-text-grey">Boost your website's visibility and rank higher on search engines.</p>
              </Card>
              <Card>
                <CardTitle icon="users">Leadership</CardTitle>
                <p className="has-text-grey">Leading development teams to innovate and excel with proven experience.</p>
              </Card>
            </div>
          </div>
        </section>
      </section >
      <Footer />
    </>
  );
}
