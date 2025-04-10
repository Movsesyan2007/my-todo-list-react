import React from "react";

const FilterTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <button
        onClick={() => setActiveTab("All")}
        className={activeTab === "All" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setActiveTab("Completed")}
        className={activeTab === "Completed" ? "active" : ""}
      >
        Completed
      </button>
      <button
        onClick={() => setActiveTab("Not Completed")}
        className={activeTab === "Not Completed" ? "active" : ""}
      >
        Not Completed
      </button>
    </div>
  );
};

export default FilterTabs;
