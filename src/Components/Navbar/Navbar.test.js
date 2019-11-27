import React from 'react';
import {render,cleanup} from '@testing-library/react'
import Navbar from './index'
afterEach(cleanup)

it('contain navbar links',()=>{
    const {getByTestId} = render(<Navbar/>)
    const navContent = getByTestId('navbarId')
    expect(navContent.children.length).toBe(2)
})
