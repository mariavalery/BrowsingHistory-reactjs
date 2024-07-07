import './index.css'
const SerachHistoryItems = props => {
  const {searchDetails, deleteTodo} = props
  const {id,timeAccessed,logoUrl,title,domainUrl} = searchDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

return(
  <li className="Search-item">
     <div>
      <h1 className="time-font">{timeAccessed}</h1>
      <img src={logoUrl} className="icon"/>
      <h1 className="time-font">{title}</h1>
      <p className="domain-description">{domainUrl}</p>
     </div>
     <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" className="delete-icon" alt="delete"/>
  </li>
)
}

export default SerachHistoryItems