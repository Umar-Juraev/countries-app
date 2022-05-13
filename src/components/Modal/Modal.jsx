import React from 'react'
import { Modal as AntdModal } from 'antd'

const Modal = ({ visible, title, handleVisible, children }) => {
    return (
        <AntdModal
            title={title}
            visible={visible}
            footer={null}
            onCancel={handleVisible}
        >

             {children}
        </AntdModal>
    )
}

export default Modal