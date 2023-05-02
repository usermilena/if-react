import React from "react";

import "./ModeIcon.css"

const ModeIcon = () => {
  return (
    <svg viewBox="0 0 30 30" className="top__header--mode__icon">
      <path fill="#fff" d="M25.61 10.61V4.39h-6.22L15 0l-4.39 4.39H4.39v6.22L0 15l4.39 4.39v6.22h6.22L15 30l4.39-4.39h6.22v-6.22L30 15l-4.39-4.39ZM15 22.958a7.924 7.924 0 0 1-3.316-.73c2.732-1.26 4.642-4.018 4.642-7.228s-1.91-5.968-4.642-7.228A7.924 7.924 0 0 1 15 7.042c4.39 0 7.958 3.568 7.958 7.958 0 4.39-3.568 7.958-7.958 7.958Z"/>
    </svg>
  );
};

export default ModeIcon;
