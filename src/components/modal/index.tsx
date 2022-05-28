import * as React from 'react'
import classNames from 'classnames'

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
      <div className={classNames(
        'modal-overlay',
        'fixed inset-0 bg-white bg-opacity-58')}
      />

      <div
        className={classNames(
          'modal-content-wrap',
          'fixed inset-0 z-1 flex-center',
        )}
        onClick={onClickOverlay}
      >
        <div
          className={classNames(
            'modal-content',
            'bg-white bg-opacity-78 backdrop-filter backdrop-blur rounded-xl border shadow',
          )}
          style={{ width }}
          onClick={(e) => { e.stopPropagation() }}
        >
          <header className={classNames(
            'modal-header',
            'flex items-center justify-between px-6 py-4 font-semibold',
          )}>
            <span className="text-xl">{title}</span>
            <i
              className="icon-close one-icon !text-xl !leading-none"
              onClick={onClose}
            />
          </header>

          <div className={classNames(
            'modal-body',
            'max-h-[calc(100vh-240px)] overflow-auto px-6 py-2 whitespace-pre-wrap',
          )}>
            {props.children || props.content}
          </div>

          <div className={classNames(
            'modal-footer',
            'px-6 py-4',
          )} />
        </div>
      </div>
    </div>
  )
}

export default Modal
