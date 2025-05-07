import React from 'react'
import './home.css'
import ShowList from '../../components/ShowList/ShowList'
import Footer from '../../components/Footer/Footer'
export default function Home () {
  return (
    <div>
      <div className='home-banner'>
        <div className='wapper'>
          <div className='hero-intro'>
            <div className='title'>Say Hello to ToyStore!</div>
            <h1>Free Ecommerce Template for Webflow</h1>
            <a href="/catalog" className="w-button button">Open Catalog</a>
          </div>
        </div>
        <a href="" className='scroll-mouse-link'>
          <div className='mouse-icon'>
            <div className="mouse-wheel-icon"></div>
          </div>
        </a>
      </div>
      <div className='section haze'>
        <div className='wapper'>
          <div className="home-categories">
            <div className="home-category-card"  >
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min.png"
                alt="" className="home-category-image-1" />
              <div className="home-category-info-1">
                <h3>Stuffed Animals</h3>
                <a href="/catalog" className="w-button button">Shop Now</a>
              </div>
            </div>
            <div className="home-category-card red-card">
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min.png"
                alt="" className="home-category-image-2" />
              <div className="home-category-info-2">
                <h3>Wooden Toys</h3>
                <a href="/catalog" className="w-button button">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section haze'>
        <div className='wapper'>
          <ShowList title='Stuffed Animal' type='stuffed-animal' />
        </div>
      </div>
      <div className='section haze ' style={{ paddingBottom: '120px' }}>
        <div className='wapper'>
          <ShowList title='Wooden Toys' type='wooden-toy' />
        </div>
      </div>
      <div className='section video-section haze'>
        <div className='wapper'>
          <div className='intro'>
            <div className="title">About The Shop</div>
            <h2 className="heading">Watch Our Story</h2>
            <p>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>
            <a href="" className='play-button'>
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className='section haze'>
        <div className='wapper column-flex'>
          <div className="intro">
            <div className="title">Made for Webflow</div>
            <h2>Simple &amp; Colorful Ecommerce Template for Your Business</h2>
          </div>
          <div className='side-blocks'>
            <div className="side-block no-padding-left">
              <div className="side-info">
                <h2>Available for FREE!</h2>
                <div className="divider"></div>
                <p className="text-grey">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                <a href="/" className="w-button">GET&nbsp;IT&nbsp;NOW!</a>
              </div>
            </div>
            <div className="side-block small-padding-side">
              <img className="side-image" src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='section haze'>
        <div className='wapper'>
          <div className="subscribe">
            <div className="subscribe-info">
              <div className="subscribe-icon">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg" alt="" />
              </div>
              <h4>Subscribe to our newsletter<br />&amp; get <span className="text-green">10% discount!</span>
              </h4>
            </div>
            <div className="subscribe-form-wrapper">
              <form id="wf-form-Subscribe-Form" name="wf-form-Subscribe-Form" data-name="Subscribe Form" method="get" className="subscribe-form" >
                <input className=" subscribe-input" maxlength="256" name="email-2" placeholder="Enter your email address" type="email" id="email-2" required="" />
                <input type="submit" data-wait="Please wait..." className="button" value="Subscribe" />
              </form>
              <div className="form-success w-form-button">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="form-error w-form-button">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section haze'>
        <div className='wapper column-flex'>
          <div className="intro">
            <div className="title">@ElasticThemes</div>
            <h2>We're on Instagram!</h2>
          </div>
          <div className="instagram">
            <a href="">
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" alt="" />
            </a>
            <a href="">
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" alt="" />
            </a>
            <a href="">
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" alt="" />
            </a>
            <a href="">
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" alt="" />
            </a>
            <a href="">
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" alt="" />
            </a>
            <a href="">
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" alt="" />
            </a>
          </div>
          <a href="https://instagram.com" target="_blank" className="w-button-ins">See More Photos</a>
        </div>
      </div>
      <div className='section color no-padding-top' style={{ paddingTop: '0px' }}>
        <div className='wapper'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
