import React from 'react';
import ReactDOM from 'react-dom';
import PaymentInfoInstance from './paymentInfo';

/**
 * modalList弹框列表封装
 * */
class PaymentInfo extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate:::::");
    let props = this.props;
    let modalContainer = null;
    if(props.visible && !document.getElementById('docModalWrap')) {

      modalContainer = document.createElement('div');
      document.body.style.overflow = 'hidden';
      modalContainer.setAttribute('id', 'docModalWrap');
      document.body.appendChild(modalContainer);

      ReactDOM.render(<PaymentInfoInstance {...this.props}/>, modalContainer);

    }else if(props.visible && document.getElementById('docModalWrap')){
      //更新数组列表的选中状态，并重新刷新
      console.log("flesh"+JSON.stringify(this.state.contentList));
      ReactDOM.render(<PaymentInfoInstance {...this.props}/>, document.getElementById('docModalWrap'));
    } else {
      //提前渲染一遍页面，0.5s后移除（因为动画结束时间是0.5秒）
      modalContainer = document.getElementById('docModalWrap');
      if(!!modalContainer){
        ReactDOM.render(<PaymentInfoInstance {...this.props}/>, modalContainer);

      setTimeout(function (){
        document.body.style.overflow = '';
        ReactDOM.unmountComponentAtNode(modalContainer);
        modalContainer.remove && modalContainer.remove();
      },500)
      }
    }
  }
  render() {
    return null;
  }
}

export default PaymentInfo;
