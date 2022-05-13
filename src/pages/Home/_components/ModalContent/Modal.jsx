import React from 'react'
import Modal from '../../../../components/Modal/Modal'
import { Store } from '../../../../context/context'

const ModalContent = ({ ...props }) => {
    const { country } = Store()
    return (
        <Modal {...props}>

            <h1>
                {country.name?.common}
            </h1>

        </Modal>
    )
}

export default ModalContent