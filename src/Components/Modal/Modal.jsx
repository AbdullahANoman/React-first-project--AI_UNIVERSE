import React from 'react';

const Modal = (props) => {
    // console.log(props.singleModal)
    const {description,pricing,image_link,integrations,features} = props.singleModal;
    // console.log(pricing)
    const featuresAll = Object.values(features|| {})
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
                  {
                   pricing && pricing.map(price=>{
                      return (
                        <div className='bg-white p-5 border-2 rounded-lg'>
                          <p>{price?price.price : 'Not Found'} <br /> {price?price.plan:'Not Found'}</p>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='flex gap-3'>
                  <div>
                    <h1 className='text-2xl font-bold ml-2 mt-5'>Feature</h1>
                    { 
                     featuresAll &&  featuresAll.map(feature=><li className='pl-4'>{feature?feature.feature_name:'Not Found'}</li>)
                    }
                  </div>
                  <div>
                  <h1 className='text-2xl font-bold ml-2 mt-5'>Integrations</h1>
                  {
                   integrations && integrations.map(item=><li>{item?item:"Not Found"}</li>)
                  }
                  </div>
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