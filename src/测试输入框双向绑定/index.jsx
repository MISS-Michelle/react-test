import React from 'react'
import ReactDOM from 'react-dom'

/* 
  高阶组件
*/

import img from './images/cat.png'

// 创建高阶组件
function withMouse(WrappedComponent) {
  // 该组件提供复用的状态逻辑
  class Mouse extends React.Component {
    // 鼠标状态
    state = {
      x: 0,
      y: 0
    }

    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    // 控制鼠标状态的逻辑
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }

    render() {
      return <WrappedComponent {...this.state} />
    }
    
  }

  // 设置displayName
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
  
  return Mouse
}

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

// 用来测试高阶组件
const Position = props => (
  <p>
    鼠标当前位置：(x: {props.x}, y: {props.y})
  </p>
)

// 猫捉老鼠的组件：用箭头函数创建的
const Cat = props => (
  <img
    src={img}
    alt=""
    style={{
      position: 'absolute',
      top: props.y - 64,
      left: props.x - 64
    }}
  />
  )

// 猫捉老鼠的组件：用普通函数创建的
// function Cat (zuobiao){
//   return (
//       <img
//         src={img}
//         alt=""
//         style={{
//           position: 'absolute',
//           top: zuobiao.y - 64,
//           left: zuobiao.x - 64
//         }}
//       />
//   )
// }

// 获取增强后的组件：
const MousePosition = withMouse(Position)

// 调用高阶组件来增强猫捉老鼠的组件：
const MouseCat = withMouse(Cat)

class App extends React.Component {
  state = {
    myinput:'myinput'
  }
  inputChange = (e) => {
    console.log(e);
    this.setState({
      myinput:e.target.value
    })
  }
  render() {
    return (
      <div>
        {/* <h1>高阶组件</h1> */}
    <h1>测试双向绑定----打印 e : {this.state.myinput}</h1>
        {/* 渲染增强后的组件 */}
        {/* <MousePosition />
        <MouseCat /> */}
        <input type="text" value={this.state.myinput} onChange={(e) => this.inputChange(e)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
