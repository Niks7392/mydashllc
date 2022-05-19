import React from 'react'
import { Register } from './Register'
import image from '../bg.png'

export const Home = (props) => {
    const {rHeading} = props;
  return (
    <div className='container home'>
        <div className="left">
            <img src={image} alt="" />
        </div>
        <div className="right">
            <Register rHeading={rHeading} />
        </div>
    </div>
  )
}
