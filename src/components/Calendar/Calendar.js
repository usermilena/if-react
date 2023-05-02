import React from "react";

import "./Calendar.css"

const Calendar = () => {
  return (
    <div className="top__search--calendar__wrapper">
      <button id="btnPrev" type="button">
        <svg className="top__search--calendar__btn--prev">
          <use href="src/images/sprite.svg#arrowCalendar" />
        </svg>
      </button>
      <button id="btnNext" type="button">
        <svg className="top__search--calendar__btn--next">
          <use href="src/images/sprite.svg#arrowCalendar" />
        </svg>
      </button>
    </div>
  );
};

export default Calendar;
