import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
export default function Footer () {
  return (
    <div className="footer">
      <div className="footer-left">
        <a href="/" aria-current="page" className="footer-brand">
          <div>ToyStore</div>
        </a>
      </div>
      <div className="footer-nav">
        <a href="/" aria-current="page" className="footer-link w--current">Home</a>
        <Link to="/catalog" className="footer-link">Catalog</Link>
        <Link to="/delivery" className="footer-link">Delivery</Link>
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/contacts" className="footer-link">Contacts</Link>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer-social-link w-inline-block">
          <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt="" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer-social-link w-inline-block">
          <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt="" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer-social-link w-inline-block">
          <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt="" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer-social-link w-inline-block">
          <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt="" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer-social-link w-inline-block">
          <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt="" />
        </a></div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div>Created with love by
            <a href="https://elasticthemes.com" target="_blank" className="link-white">Elastic Themes</a>
          </div>
        </div>
        <div className="footer-bottom-right">
          <div>Powered by
            <a href="https://webflow.com/" target="_blank" className="link-white">Webflow</a>
          </div>
          <div className="footer-bottom-divider"></div>
          <a href="/" className="link-white">Style Guide</a>
          <div className="footer-bottom-divider"></div>
          <a href="/" className="link-white">Licensing</a>
        </div>
      </div>
    </div>
  )
}
