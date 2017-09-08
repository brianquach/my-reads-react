import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

class SearchInput extends Component {
  constructor() {
    super()

    this.onChange = this.onChange.bind(this)
  }
  render() {
    return <input
      type="text"
      placeholder="Search by title or author"
      onChange={this.onChange} />
  }

  onChange(event) {
    const maxResults = this.props.maxResults || 5
    BooksAPI.search(event.target.value, maxResults)
      .then(
        (response) => {
          console.log(response)
        }
      )
  }
}

export default SearchInput
