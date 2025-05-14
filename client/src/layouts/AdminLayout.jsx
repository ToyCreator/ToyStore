// layouts/AdminLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const AdminLayout = () => {
  return (
    <Container fluid>
      <Row className="min-vh-100">
        {/* 侧边栏 */}
        <Col xs={12} md={3} lg={2} className="bg-light border-end p-3">
          <h4 className="mb-4">后台管理</h4>
          <Nav className="flex-column">
            {/* <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'fw-bold text-primary' : 'text-dark'}`
              }
            >
              仪表盘
            </NavLink> */}
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'fw-bold text-primary' : 'text-dark'}`
              }
            >
              商品管理
            </NavLink>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'fw-bold text-primary' : 'text-dark'}`
              }
            >
              用户管理
            </NavLink>
          </Nav>
        </Col>

        {/* 主内容区 */}
        <Col xs={12} md={9} lg={10} className="p-4 bg-white">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
