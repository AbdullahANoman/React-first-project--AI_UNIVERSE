import React, { useEffect } from 'react';



const ShowData = (props) => {
    const {image,features,name,published_in,id} = props.user;
    
    
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" className='w-90 h-96' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Features</h2>
                <ol className=''>
                    {features.map((feature,index)=><li key={index}>{index+1}.{feature}</li>)}
                </ol>
                <hr className='border mb-3'/>

                <div className="card-actions justify-between items-center">
                    <div>
                    <h2 className='font-bold text-2xl'>{name}</h2>
                    <i className="fa-solid fa-calendar-days mt-5"></i> {published_in}
                    </div>
                    <label onClick={()=>props.setUniqueId(id)} htmlFor="my-modal-5" className="text-rose-500 font-bold rounded-full bg-gray-200 p-5"><i className="fa-solid fa-arrow-right"></i></label>
                    
                 </div>
                 
            </div>
        </div>
    );
};

export default ShowData;