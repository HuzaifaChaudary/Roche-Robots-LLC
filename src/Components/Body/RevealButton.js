import React, { useEffect } from "react";

const RevealButton = () => {
  useEffect(() => {
    const readMore = document.querySelectorAll(".reveal-toggler");
    const readMoreLabel = document.querySelectorAll(".reveal-btn");
    const visibleText = document.querySelectorAll(".visible-text");
    const hiddenText = document.querySelectorAll(".hidden-text");

    readMore.forEach((el, index) => {
      el.onchange = () => {
        if (el.checked) {
          visibleText[index].style.display = "none";
          hiddenText[index].style.display = "block";
          readMoreLabel[index].innerHTML = "READ LESS";
        } else {
          hiddenText[index].style.display = "none";
          visibleText[index].style.display = "block";
          readMoreLabel[index].innerHTML = "READ MORE";
        }
      };
    });
  }, []);

  return (
    <label htmlFor="read5" className="reveal-btn">
      READ MORE
    </label>
  );
};

export default RevealButton;
