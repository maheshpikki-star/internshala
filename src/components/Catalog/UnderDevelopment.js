import React, { useEffect } from "react";
import Apxor from "apxor";
const UnderDevelopment = () => {
  useEffect(() => {}, []);

  return (
    <div className="catalogContainer__outer">
      <div className="sidebar">
        <div className="sidebar__left">
          <div className="sidebar__left--container"></div>
        </div>
        <div className="sidebar__right">
          <div className="catalogContainer__inner">
            <div className="newsNoteWorth">
              <br />
              <br />
              <div className="newsGrid">
                <a href="#" className="catalogCard courseCard">
                  <div className="courseCard--progress pageNotBuilt">
                    <p className="courseCard--motivate-1">In Progress. . .</p>
                    <p className="courseCard--motivate-2">Keep going</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
