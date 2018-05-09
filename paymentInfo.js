import React from 'react';
import './style.less';

const ModalInstance = (props) => {
  const title = props.title || '';
  const cancel = props.cancel || {};

  return (
        <div className='Modal'>
          <div className={`bg ${props.visible?'showBgAnimation':'hideBgAnimation'}`} onClick={()=>{cancel()}}></div>
            <div className={`modal-container ${props.visible?'showListAnimation':'hideListAnimation'}`}>
              <div className="modal-title"></div>
                <div className="middle-hollow-container">
                  <div className="middle-line"></div>
                  <div className="dot-line-left"></div>
                  <div className="dot-line-center"></div>
                  <div className="dot-line-right"></div>
                </div>
              <div className="modal-body">
            </div>
          </div>
        </div>
  )
};
export default ModalInstance;
