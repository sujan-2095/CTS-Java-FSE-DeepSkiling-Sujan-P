import React from 'react';

function LogoutButton({ onClick }) {
  return (
    <button className="btn btn-logout" onClick={onClick}>
      Logout
    </button>
  );
}

export default LogoutButton;
