import { render, unmountComponentAtNode } from 'react-dom'
import styled from 'styled-components'
import React from 'react'


const MODAL_ID = 'custom-modal-root'

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.2);
  z-index: 150;
`

const getModalContainer = () => {
  return document.body.querySelector(`#${MODAL_ID}`)
}

export function useModal() {
  const showModal = (content: JSX.Element) => {
    const container = getModalContainer()

    if (container !== null) return

    const containerDomNode = document.createElement('div')
    containerDomNode.setAttribute('id', MODAL_ID)
    document.body.appendChild(containerDomNode)

    render(<ModalContainer>{content}</ModalContainer>, containerDomNode)
  }

  const closeModal = () => {
    const container = getModalContainer()
    if (container) {
      unmountComponentAtNode(container)
      document.body.removeChild(container)
    }
  }

  return { showModal, closeModal }
}
