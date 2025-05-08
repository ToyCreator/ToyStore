// CartModal.jsx
import React from "react";
import { Modal, List, Typography, Divider } from "antd";
import './cart-modal.css'
const { Text } = Typography;


export default function CartModal ({ visible, onClose, cartItems, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Modal
      title="Your Cart"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      {cartItems.length === 0 ? (
        <div className='textContain'>
          <Text>No items found.</Text>

        </div>
      ) : (
        <>
          <List
            bordered
            dataSource={cartItems}
            renderItem={(item, index) => (
              // <List.Item
              //   actions={[
              //     <a key="remove" onClick={() => onRemove(index)}>
              //       删除
              //     </a>,
              //   ]}
              // >
              //   {item.name} - ¥{item.price}
              // </List.Item>
              <div className='cart-list-box'>
                <div className='cart-list'>
                  <img src={item.url} alt="" />
                  <div className='middle-box'>
                    <div className='item-title'>{item.title}</div>
                    <div className='item-price'>{item.price}</div>
                    <div className='item-remove'>Remove</div>
                  </div>
                  <input type="number" min="1" className=" quantity-input" placeholder='0' />
                </div>

              </div>
            )}
          />
          {/* <Divider /> */}
          <div className='total-price'>
            <div>Subtotal</div>
            <div style={{ fontWeight: 800 }}>{total}</div>
          </div>
          <div style={{ padding: '35px 30px 10px' }}>
            <div className='check-btn'>Continue to Checkout</div>
          </div>
        </>
      )}
    </Modal>
  );
}
