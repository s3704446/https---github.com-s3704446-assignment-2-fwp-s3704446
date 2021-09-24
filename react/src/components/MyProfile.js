import React from "react";

export default function MyProfile(props) {
  return (
    <div className="content">
      <h1 className="display-4">My Profile</h1>
      <table className="profile-table">
        <tr id="dark-tr">
          <th>Username: </th>
          <th>{props.user.username}</th>
        </tr>
        <tr>
          <td>Name: </td>
          <td>{props.user.first_name} {props.user.last_name} </td>
        </tr>
        <tr>
          <td>Joined date: </td>
          <td>{props.user.joined_date}</td>
        </tr>
        <tr>
          <td><button className="profile-button" id="profile-edit">Edit</button></td>
          <td><button className="profile-button" id="profile-delete">Delete</button></td>
        </tr>
      </table>
    </div>
  );
}
