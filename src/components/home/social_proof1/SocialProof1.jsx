import "./SocialProof1.css";
import LogoSlideItem from "./logo-slide-item";
import {
  bolt,
  featherdev,
  global,
  lightbox,
  nietz,
  sphere,
} from "./assets/assets";

export default function SocialProof1() {
  return (
    <section className="social-proof1">
      <div className="social-proof1-container">
        <div className="social-proof1-header">
          <h2>Trusted by innovative teams</h2>
          <p>Join thousands of satisfied customers who rely on our platform</p>
        </div>

        <div className="social-logos">
          <div className="logo-slider">
            <div className="logo-slide">
              <LogoSlideItem image={bolt} name="Bolt" />
              <LogoSlideItem image={featherdev} name="Featherdev" />
              <LogoSlideItem image={global} name="Global" />
              <LogoSlideItem image={lightbox} name="Lightbox" />
              <LogoSlideItem image={nietz} name="Nietz" />
              {/* //////////////////// */}
              <LogoSlideItem image={bolt} name="Bolt" />
              <LogoSlideItem image={featherdev} name="Featherdev" />
              <LogoSlideItem image={global} name="Global" />
              <LogoSlideItem image={lightbox} name="Lightbox" />
              <LogoSlideItem image={nietz} name="Nietz" />
              <LogoSlideItem image={nietz} name="Nietz" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
