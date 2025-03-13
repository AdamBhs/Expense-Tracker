import React from 'react'
import styles from "./comp.module.css"

export default function Btton({title}) {
  return (
    <button className={styles.btn}>
        {title}
    </button>
  )
}
