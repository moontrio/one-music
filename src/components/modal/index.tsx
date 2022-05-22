import React from 'react'

export interface ModalProps {
  open: boolean
  title: string
  width?: string
  content?: string
  closeOnClickOverlay?: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const Modal = (props: ModalProps) => {
  const {
    open,
    title,
    width = '50vw',
    closeOnClickOverlay = true,
    onClose = () => {},
  } = props

  function onClickOverlay() {
    if (!closeOnClickOverlay) return
    onClose()
  }

  return (
    <div className="modal" style={{ display: open ? 'block' : 'none' }}>
      <div className="modal-overlay fixed inset-0 bg-white bg-opacity-58"/>

      <div
        className="modal-content-wrap fixed inset-0 flex-center"
        onClick={onClickOverlay}
      >
        <div
          className="modal-content bg-white bg-opacity-78 backdrop-filter backdrop-blur rounded-xl border shadow"
          style={{ width }}
          onClick={(e) => { e.stopPropagation() }}
        >
          <header className="modal-header flex items-center justify-between px-6 py-4 font-semibold">
            <span className="text-xl">{title}</span>
            <i
              className="icon-close one-icon !text-xl !leading-none"
              onClick={onClose}
            />
          </header>

          <div className="modal-body px-6 py-2 whitespace-pre-wrap">
            {props.children || props.content}
          </div>

          <div className="modal-footer px-6 py-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Modal
