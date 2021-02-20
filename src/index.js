import React from 'react'
import ReactDOM from 'react-dom'

/* 
  render props 模式
*/

// 导入图片资源
import img from './images/cat.png'

// 作用：鼠标位置复用
class Mouse extends React.Component {
  // 鼠标位置state
  state = {
    x: 0,
    y: 0
  }

  // 鼠标移动事件的事件处理程序
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  // 监听鼠标移动事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
    //这里的children其实就是子组件标签里写的函数代码、文字、p标签等等
    console.log(this.props.children);
  }

  render() {
    //return this.props.children(this.state)
    return (
       <div>
         {/* {this.props.children(this.state)} */}
         <p>我是鼠标组件里面的p标签</p>
       </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>render props 模式</h1>
        {/* <Mouse
          render={mouse => {
            return (
              <p>
                鼠标位置：{mouse.x} {mouse.y}
              </p>
            )
          }}
        /> */}

        <Mouse>
          {/* 这个标签内可以包裹文字和标签 */}
          {mouse => {
            return (
              <p>
                鼠标位置：{mouse.x} {mouse.y}
              </p>
            )
          }}
        </Mouse>

        <Mouse>
          {mouse => (
            <img
              src={img}
              alt="猫"
              style={{
                position: 'absolute',
                top: mouse.y - 64,
                left: mouse.x - 64
              }}
            />
          )}
        </Mouse>

        {/* 猫捉老鼠 */}
        {/* <Mouse
          render={mouse => {
            return (
              <img
                src={img}
                alt="猫"
                style={{
                  position: 'absolute',
                  top: mouse.y - 64,
                  left: mouse.x - 64
                }}
              />
            )
          }}
        /> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
