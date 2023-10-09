import { useState } from "react";
import "./Search.css";
import ArrowIcon from "../assets/icon-arrow.svg";

export default function Search(props) {
  const { handleOnFormSubmit } = props;

  return (
    <div className='searchContainer'>
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleOnFormSubmit}>
        <input
          id='ipaddress'
          type='text'
          placeholder='Search for any IP address or domain'
        />
        <button>
          <img className='arrow' src={ArrowIcon} />
        </button>
      </form>
    </div>
  );
}
