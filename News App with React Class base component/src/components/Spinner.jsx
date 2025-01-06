import React, { Component } from 'react'
import spinner from './loader.gif'
export default class Loader extends Component {

    render() {
        return (
            <div className='text-center my-3'>
                <img src={spinner} alt="" />
            </div>
        )
    }
}
