import React from 'react'
import ShowList from '../../components/ShowList/ShowList'
import BreadcrumbAntd from '../../components/Breadcrumb/BreadcrumbAntd'
import Footer from '../../components/Footer/Footer'
export default function Catalog () {
  return (
    <div>
      <div className='section haze'>
        <div className='wapper'>
          <BreadcrumbAntd />
        </div>
      </div>
      <div className='section haze'>
        <div className='wapper'>
          <ShowList title='All Toys' type='all' />
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
                <input className=" subscribe-input" maxLength="256" name="email-2" placeholder="Enter your email address" type="email" id="email-2" required="" />
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
