import React from 'react';
import {render,cleanup} from '@testing-library/react'
import Card from './index'
afterEach(cleanup)

it('contain Card information',()=>{
    const {getByTestId} = render(<Card/>)
    const cardContent = getByTestId('card-id')
    expect(cardContent.children.length).toBe(2)
})
