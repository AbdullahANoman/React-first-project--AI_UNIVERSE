import React from 'react';

const Modal = (props) => {
    // console.log(props.singleModal)
    const {id,description} = props.singleModal
    return (
        <div>
           <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div>
                <div>
                    <p>{description}</p>
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