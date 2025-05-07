import React from 'react'
import { Breadcrumb } from 'antd';
import './bread-crumb.css'
import { Link, useLocation } from 'react-router-dom';
export default function BreadcrumbAntd () {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    // item[0].toUpperCase()
    // const url = `${pathSnippets.slice(0, index + 1).join('')}`;
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const name = capitalize(pathSnippets[index]);
    return {
      key: url,
      title: <Link to={url}>{name}</Link>,
    };
  });
  const breadcrumbItems = [
    {
      key: 'home',
      title: <Link to="/">Home</Link>,
    },
    ...extraBreadcrumbItems,
  ];
  return (
    <div className='bread-box'>
      <Breadcrumb
        separator={<img style={{ opacity: '0.2' }} src='https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg'></img>}
        items={breadcrumbItems}
      />
    </div>

  )
}
