import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
    display: flex;
    justify-content: space-between;
`


const navbar = () => {
    return (
        <div >
            <nav>
                <UL className='navi'>
                    <div className='logo'>
                        <li href='#'>
                            Home
                        </li>
                    </div>
                    <div className='navLinks'>
                        <li href ='#'>
                            Products
                        </li>
                        <li href ='#'>
                            Cart
                        </li>
                        <li href ='#'>
                            Checkout
                        </li>
                    </div>
                </UL>
            </nav>
        </div>
    )
}

export default navbar
