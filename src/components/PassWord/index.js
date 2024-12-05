import './index.css'

const PassWord = props => {
  const {details, onListDelete, isActive} = props
  const {id, website, username, password} = details
  const onDelete = () => {
    onListDelete(id)
  }
  return (
    <li className="lists">
      <div className="heading">
        <h1 className="head">{username.slice(0, 1)}</h1>
      </div>
      <div className="gap">
        <p>{website}</p>
        <p>{username}</p>
        {isActive ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-img"
          />
        )}
      </div>
      <button data-testid="delete" className="delete-btn" onClick={onDelete}>
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PassWord
