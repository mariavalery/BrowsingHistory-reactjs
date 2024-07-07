import {Component} from 'react'
import SearchHistoryItem from '../SearchHistoryItem'
import './index.css'

class SearchHistoryDetails extends Component {
  state = {
    searchInput: '',
    searchList:initialHistoryList,
  }
  
    onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
deleteTodo = id => {
    const {searchList} = this.state
    const updatedSearchList = searchList.filter(eachHistory => eachHistory.id !== id)
    this.setState({searchList:updatedSearchList})
}

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchList = initialHistoryList.map(eachHistory =>
      initialHistoryList.title
        .toLowerCase()
        .includes(eachHistory.toLowerCase()),
    )

    
    return (
      <div className="app-container">
        <div className="search-eachHistory-container">
          <nav className="navbar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="history"
              className="history-icon"
            />
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search History"
                className="user-form"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </nav>
          <ul className="search-list">
            {searchList.map(eachHistory => (
              <SearchHistoryItem
                key={eachHistory.id}
                searchDetails={eachHistory}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SearchHistoryDetails
