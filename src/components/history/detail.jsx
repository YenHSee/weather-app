import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const HistoryDetail = ({ history, setHistoryList, setQuery }) => {
  const deleteHistory = (id) => {
    setHistoryList((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const searchHistory = (name) => {
    setQuery(name.toLowerCase());
  };

  return (
    <div className="detail_card">
      <div className="detail_card_info">
        <div className="detail_card_info_name">
          {history?.name}, {history?.country}
        </div>
        <div className="detail_card_info_time">{history?.timeNow}</div>
      </div>
      <div className="detail_card_action">
        <button
          className="detail_card_action_button"
          onClick={() => searchHistory(history?.name)}
        >
          <CiSearch />
        </button>
        <button
          className="detail_card_action_button"
          onClick={() => deleteHistory(history?.id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default HistoryDetail;
