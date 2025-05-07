import React from 'react'
import './main-layout.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Outlet } from 'react-router';
export default function MainLayOut () {
  return (
    <div>
      <div className="nav-bar">
        <div className='nav-top'>
          <div className="nav-top-wrapper">
            <div className="nav-top-info">
              <div className="nav-top-text">Call Us: +1 213 974-5898</div>
              <div className="nav-top-email">Email:
                <a href=" " className="link-white">toystore@template.com</a>
              </div>
            </div>
            <div className="nav-top-social">
              <a href="https://elasticthemes.com" target="_blank" rel="noreferrer" className="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt="" />
              </a>
              <a href="https://elasticthemes.com" target="_blank" rel="noreferrer" className="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt="" />
              </a>
              <a href="https://elasticthemes.com" target="_blank" rel="noreferrer" className="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt="" />
              </a>
              <a href="https://elasticthemes.com" target="_blank" rel="noreferrer" className="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt="" />
              </a>
              <a href="https://elasticthemes.com" target="_blank" rel="noreferrer" className="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className='nav-main'>
          <div className="nav-main-wrapper">
            <a href="/" className="brand" >
              <div>ToyStore</div>
            </a>
            <div className="navigation">
              <nav className="nav-menu ">
                <a href="/catalog" className="nav-link ">Catalog</a>
                <a href="/delivery" className="nav-link ">Delivery</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contacts" className="nav-link ">Contacts</a>
              </nav>
              <div className="nav-button" >
                <a href="/">
                  <div className="cart">Cart</div>
                  <ShoppingCartOutlinedIcon style={{ color: 'black', margin: ' 0 10px' }} />
                  <div className="item-count">0</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
