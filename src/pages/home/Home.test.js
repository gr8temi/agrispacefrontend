import React from 'react';
import {render,cleanup} from '@testing-library/react'
import Home from './index'
afterEach(cleanup)

it('contain Home information',()=>{
    const {getByTestId} = render(<Home/>)
    const cardContent = getByTestId('home-id')
    expect(cardContent.children.length).toBe(1)
})
