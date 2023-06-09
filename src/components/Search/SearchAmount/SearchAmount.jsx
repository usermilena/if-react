import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { AmountOption } from "../../AmountOption";
import { ChildrenSelector } from "../../ChildrenSelector";
import "./SearchAmount.css";

export const SearchAmount = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="top__search--amount__wrapper">
        <div onClick={handleVisible}>
          {adults} Adults — {children} Children — {room} Room
        </div>
      </div>
      {isVisible && (
        <div className="top__search--amount__filter">
          <AmountOption
            value={adults}
            setValue={setAdults}
            title="Adults"
            minValue={1}
            maxValue={30}
          />
          <AmountOption
            value={children}
            setValue={setChildren}
            title="Children"
            minValue={0}
            maxValue={10}
          />
          <AmountOption
            value={room}
            setValue={setRoom}
            title="Rooms"
            minValue={1}
            maxValue={30}
          />
          {children >= 1 && (
            <>
              <p className="children__selector--title">
                What is the age of the child you&apos;re travelling with?
              </p>
              <div className="children__selector--wrapper">
                {Array(children)
                  .fill("")
                  .map(() => (
                    <ChildrenSelector
                      key={uuidv4()}
                      className="children__selector"
                    />
                  ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
