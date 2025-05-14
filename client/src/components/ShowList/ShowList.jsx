import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './show-list.css'
import data from '../../data'
export default function ShowList (props) {
  let [title, setTitle] = useState(props.title)
  let [dataList, setDataList] = useState([])
  const [activeType, setActiveType] = useState(props.type);
  let [isAll, setIsAll] = useState(true)


  // 同步 props.activeType → state
  useEffect(() => {
    setActiveType(props.type);
  }, [props.type]);
  // 根据 activeType 筛选数据
  useEffect(() => {
    if (activeType === 'all') {
      setDataList(data);
      setIsAll(false)
      setTitle('All Toys')
    } else {
      setDataList(data.filter(item => item.type === activeType));
      setTitle(activeType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1) + 's').join(' '))
    }
  }, [activeType]);
  const getBtnClass = (type) =>
    `${activeType === type ? 'filter-btn' : ''}`;
  const linkTo = (name) => {
    let str = name.split(' ').join('-')
    return `/product/${str}`
  }


  return (
    <div style={{ width: '100%' }}>
      <div className="shop-header">
        <h3 className="no-margin">{title}</h3>
        {isAll ?
          (
            <Link to="/catalog" className="arrow-link">See All Toys</Link>
          ) :
          (
            <div className='shop-categories-wrapper' style={{ marginBottom: '20px' }}>
              <a className={getBtnClass('all')} onClick={() => setActiveType('all')}>
                All Toys
              </a>
              <a className={getBtnClass('wooden-toy')} onClick={() => setActiveType('wooden-toy')}>
                Wooden Toys
              </a>
              <a className={getBtnClass('stuffed-animal')} onClick={() => setActiveType('stuffed-animal')}>
                Stuffed Animals
              </a>
            </div>
          )
        }
        <div className="shop-header-line">
          <div className="shop-header-color">
          </div>
        </div>
      </div>
      <div className='full-width'>
        <div className='products'>
          {
            dataList.map((item, index) => {
              return (
                <div key={index} className="product-card-wrapper">
                  <Link to={linkTo(item.title)} className="product-card">
                    <div className="product-card-image-wrapper">
                      <img alt=""
                        src={item.url} />
                    </div>
                    <h6 className="product-card-heading">{item.title}</h6>
                    <div className="product-card-price">{item.price}</div>
                  </Link>
                </div>
              )

            })
          }

        </div>
      </div>
    </div>
  )
}
