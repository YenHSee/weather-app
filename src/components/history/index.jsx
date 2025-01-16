import React from "react";
import HistoryDetail from "./detail";
import "./index.scss";

const History = ({ historyList, setHistoryList, setQuery }) => {
  if (historyList.length > 0) {
    return (
      <div className="history_container">
        <p>Search History</p>

        {historyList.map((history, index) => {
          return (
            <HistoryDetail
              key={index}
              history={history}
              setHistoryList={setHistoryList}
              setQuery={setQuery}
            />
          );
        })}
      </div>
    );
  }
};

export default History;
