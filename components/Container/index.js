import React from 'react'
import style from './Container.module.scss'
import classNames from 'classnames'

const Container = ({children, className}) => {
  return (
    <div className={classNames(style.wrapper, className)}>{children}</div>
  )
}

export default Container