import React, { useContext } from 'react'
import { myComponent } from './App'

export default function Z() {
const user = useContext(myComponent)
  return (
    <h2>this is last Comp Z {user}</h2>
  )
}
