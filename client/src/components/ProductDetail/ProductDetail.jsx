import React from 'react'
import BreadcrumbAntd from '../Breadcrumb/BreadcrumbAntd'
import './product-detail.css'
export default function ProductDetail () {
  return (
    <div>
      <div className='section haze'>
        <div className='wapper'>
          <BreadcrumbAntd />
        </div>
      </div>
      <div className="section no-padding-vertical haze">
        <div className='wapper'>
          <div className='product'>
            <div className="product-info">
              <h1>Happy Flower</h1>
              <p className="text-grey">A successful marketing plan relies heavily on the pulling-power of advertising copy.
                Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.
                There is no magic formula to write perfect ad copy. It is based on a number of factors.</p>
              <div className="product-price">$&nbsp;38.00&nbsp;USD</div>
              <div className="full-width">
                <form className="add-to-cart">
                  <input type="number" min="1" className=" quantity-input" placeholder='0' />
                  <div className="buy-buttons">
                    <input type="submit" className=" add-to-cart-button" value="Add to Cart" />
                    {/* <a className="w-commerce-commercebuynowbutton button buy-now-button w-dyn-hide" href="/checkout">Buy now</a> */}
                  </div>
                </form>
                <div style={{ display: "none" }} className="out-of-stock" tabindex="0">
                  <div>This product is out of stock.</div>
                </div>
                <div style={{ display: "none" }} className="form-error">
                  <div>Product is not available in this quantity.</div>
                </div>
              </div>
            </div>
            <div className="product-image-wrapper">
              <img src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png" alt="" />
            </div>
            <div className="product-details-wrapper">
              <div className="shop-header">
                <h5 className="no-margin">Product Details</h5>
                <div className="sku">
                  <div>SKU:&nbsp;</div>
                  <div >35001</div>
                </div>
                <div className="shop-header-line">
                  <div className="shop-header-color green"></div>
                </div>
              </div>
              <div className="product-details w-richtext"><h4>Add Your Product Description</h4>
                <p>The rich text element allows you to create and format headings, paragraphs, blockquotes,
                  images, and video all in one place instead of having to add and format them individually.
                  Just double-click and easily create content. A rich text element can be used with static or dynamic content.
                  For static content, just drop it into any page and begin editing. For dynamic content,
                  add a rich text field to any collection and then connect a rich text element to that field in the settings panel.
                  Voila!</p>
                <h4>Simple &amp; Elegant Template</h4>
                <p>Headings, paragraphs, blockquotes, figures, images,
                  and figure captions can all be styled after a class is added to the rich text element using the
                  "When inside of" nested selector system.</p>
                <ul>
                  <li>Beautifully Designed</li>
                  <li>Fully Responsive</li>
                  <li>CMS Content</li>
                  <li>Smooth Animations</li>
                </ul>
                <p>A successful marketing plan relies heavily on the pulling-power of advertising copy.
                  Writing result-oriented ad copy is difficult, as it must appeal to, entice,
                  and convince consumers to take action.</p>
                <h5>Perfect Choice for Your Business</h5>
                <p>Grabbing the consumer’s attention isn’t enough; you have to keep that attention for at least a few seconds.
                  This is where your benefits come into play or a product description that sets your offer apart from the others.
                </p>
              </div>
              <div className="product-table">
                <div className="product-table-cell">
                  <div>Width</div>
                  <div className="product-table-info">
                    <div >12.5</div>
                    <div> &nbsp;in</div>
                  </div>
                </div>
                <div className="product-table-cell">
                  <div>Height</div>
                  <div className="product-table-info">
                    <div>6</div>
                    <div> &nbsp;in</div>
                  </div>
                </div>
                <div className="product-table-cell">
                  <div>Length</div>
                  <div className="product-table-info">
                    <div >3</div>
                    <div> &nbsp;in</div>
                  </div>
                </div>
                <div className="product-table-cell no-border-bottom">
                  <div>Weight</div>
                  <div className="product-table-info">
                    <div>32</div>
                    <div> &nbsp;oz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
