import React from 'react'
import ReactDOM from 'react-dom'

/* 
  评论列表案例

  comments: [
    { id: 1, name: 'jack', content: '沙发！！！' },
    { id: 2, name: 'rose', content: '板凳~' },
    { id: 3, name: 'tom', content: '楼主好人' }
  ]
*/

import './index.css'

class App extends React.Component {
  // 初始化状态
  state = {
    comments: [
      // { id: 1, name: 'jack', content: '沙发！！！' },
      // { id: 2, name: 'rose', content: '板凳~' },
      // { id: 3, name: 'tom', content: '楼主好人' }
    ]
  }

  // 渲染评论列表：
  renderList() {
    const { comments } = this.state

    if (comments.length === 0) {
      return <div className="no-comment">暂无评论，快去评论吧~</div>
    }

    return (
      <ul>
        {comments.map(item => (
          <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
          </li>
        ))}
      </ul>
    )

    // return this.state.comments.length === 0 ? (
    //   <div className="no-comment">暂无评论，快去评论吧~</div>
    // ) : (
    //   <ul>
    //     {this.state.comments.map(item => (
    //       <li key={item.id}>
    //         <h3>评论人：{item.name}</h3>
    //         <p>评论内容：{item.content}</p>
    //       </li>
    //     ))}
    //   </ul>
    // )
  }

  render() {
    return (
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
          />
          <br />
          <button>发表评论</button>
        </div>

        {/* 通过条件渲染决定渲染什么内容： */}
        {this.renderList()}

        {/* {this.state.comments.length === 0 ? (
          <div className="no-comment">暂无评论，快去评论吧~</div>
        ) : (
          <ul>
            {this.state.comments.map(item => (
              <li key={item.id}>
                <h3>评论人：{item.name}</h3>
                <p>评论内容：{item.content}</p>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
