import React from 'react'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Comp: null
    }

    this.loadContent = this.loadContent.bind(this)
  }

  loadContent() {
    import('./Good').then(({ Good }) => {
      this.setState({
        Comp: Good
      })
    })
  }

  render() {
    const { Comp } = this.state
    return (
      <div>
        <button type="button" onClick={this.loadContent}>
          Load Content
        </button>
        {Comp && <Comp />}
      </div>
    )
  }
}
