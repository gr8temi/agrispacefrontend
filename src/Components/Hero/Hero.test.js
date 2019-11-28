import React from 'react';
import {render,cleanup} from '@testing-library/react'
import Hero from './index'
afterEach(cleanup)

it('contain hero information',()=>{
    const {getByTestId} = render(<Hero/>)
    const heroContent = getByTestId('heroTest')
    expect(heroContent.children.length).toBe(2)
})
