import React from 'react'

export class JustComments extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  render() {
    return (
      <div
        ref={this.ref}
        className="just-comments"
        data-apikey={process.env.GATSBY_JUST_COMMENTS_API_KEY}
        data-locale="ru"
        data-allowguests="true"
        data-recaptcha="true"
      />
    )
  }
  componentDidMount() {
    const s = document.createElement('script')
    s.src = '//just-comments.com/w.js'
    s.setAttribute('data-timestamp', +new Date())
    this.ref.current.appendChild(s)
  }
}
