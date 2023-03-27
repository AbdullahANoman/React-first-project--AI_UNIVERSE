import React from 'react';

const Modal = (props) => {
    // console.log(props.singleModal)
    const {description,pricing,image_link} = props.singleModal;
    // console.log(pricing)
    return (
        <div className=''>
           <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box w-11/12 max-w-5xl ">
            <div className='flex gap-5'>
                <div className='bg-red-100 w-full'>
                <div>
                    <p>{description}</p>
                </div>
                <div className='flex gap-4 '>
                  {/* {
                    pricing.map(price=>{
                      return (
                        <div className='bg-white p-5 border-2 rounded-lg'>
                          <p>{price.price} <br /> {price.plan}</p>
                        </div>
                      )
                    })
                  } */}
                </div>
                </div>
                <div className='w-full'>
                  <div>
                    <img className='w-96 h-80' src={image_link ? image_link[0]:null} alt="" />
                  </div>
                </div>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">Yay!</label>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Modal;