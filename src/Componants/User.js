import React, { Component } from "react";
import axios from 'axios'
class User extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
      console.log(res.data);
      this.setState({
        users: res.data,
      });
    });
  }

  render() {
    const { users } = this.state;
    const userList = users.map((user) => {
      return (
        <div>
          <div className="content">
            <table>
              <tr>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            </table>
          </div>
        </div>
      );
    });
    return (
      <div className="user">
        <table>
          <tr>
            <th>id</th>
            <td>name</td>
            <td>username</td>
          </tr>
        </table>
        <div>{userList}</div>
      </div>
    );
  }
}

export default User;
