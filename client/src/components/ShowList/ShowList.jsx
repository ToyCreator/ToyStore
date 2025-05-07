import React from 'react'
import './show-list.css'
export default function ShowList () {
  return (
    <div style={{ width: '100%' }}>
      <div className="shop-header">
        <h3 className="no-margin">Stuffed Animals</h3>
        <a href="/catalog" className="arrow-link">See All Toys</a>
        <div className="shop-header-line">
          <div className="shop-header-color">
          </div>
        </div>
      </div>
      <div className='full-width'>
        <div className='products'>

          <div className="product-card-wrapper">
            <a href="/product/teddy-bear" className="product-card">
              <div className="product-card-image-wrapper">
                <img alt=""
                  src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" />
              </div>
              <h6 className="product-card-heading">Teddy Bear</h6>
              <div className="product-card-price">$&nbsp;30.00&nbsp;USD</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
