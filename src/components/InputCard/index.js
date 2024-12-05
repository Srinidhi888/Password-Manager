import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PassWord from '../PassWord'

class InputCard extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    userList: [],
    searchInput: '',
    isActive: false,
  }

  onAdd = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newList = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, newList],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onShow = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onListDelete = id => {
    const {userList} = this.state
    const updatedList = userList.filter(each => each.id !== id)
    this.setState({
      userList: updatedList,
    })
  }

  onWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      userList,
      searchInput,
      isActive,
    } = this.state
    const onSearchList = userList.filter(each =>
      each.website
        .toLocaleLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )
    const page = (
      <div className="page">
        <img
          className="image-2"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
        <p className="head">No Passwords</p>
      </div>
    )
    const page1 = (
      <ul className="ullist">
        {onSearchList.map(each => (
          <PassWord
            details={each}
            key={each.id}
            isActive={isActive}
            onListDelete={this.onListDelete}
          />
        ))}
      </ul>
    )
    return (
      <div className="total-bg">
        <img
          className="ima"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="card-1">
          <form className="inner-card-1" onSubmit={this.onAdd}>
            <h1 className="head head-r">Add New Password</h1>
            <div className="grp">
              <img
                className="ima-1"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                value={websiteInput}
                type="text"
                onChange={this.onWebsite}
                placeholder="Enter Website"
                className="ipt"
              />
            </div>
            <div className="grp">
              <img
                className="ima-1"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                value={usernameInput}
                type="text"
                onChange={this.onUsername}
                placeholder="Enter Username"
                className="ipt"
              />
            </div>
            <div className="grp">
              <img
                className="ima-1"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                value={passwordInput}
                type="password"
                onChange={this.onPassword}
                placeholder="Enter Password"
                className="ipt"
              />
            </div>
            <button className="btn-add" type="submit">
              Add
            </button>
          </form>

          <img
            className="image-1"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="card-2">
          <div className="grp-1">
            <div className="data">
              <h1 className="head">Your Passwords</h1>
              <p className="spcl">{onSearchList.length}</p>
            </div>
            <div className="grp">
              <img
                className="ima-1"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                className="ipt"
                onChange={this.onSearch}
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="grp-2">
            <input
              className="ipt-1"
              id="pswd"
              type="checkbox"
              onChange={this.onShow}
            />
            <label htmlFor="pswd">Show Passwords</label>
          </div>
          {onSearchList.length > 0 ? page1 : page}
        </div>
      </div>
    )
  }
}

export default InputCard
