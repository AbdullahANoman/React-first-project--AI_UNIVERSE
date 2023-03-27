import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center mt-5'>
            <button className="btn btn-active btn-accent text-white font-bold text-center">{children}</button>
        </div>
    );
};

export default Button;