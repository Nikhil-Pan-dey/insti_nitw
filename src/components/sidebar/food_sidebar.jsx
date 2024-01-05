import React, { useState, useRef, useEffect } from 'react';
import "./sidebar.css";

const FoodSidebar = ({ onButtonClick }) => {
  const [showSpans, setShowSpans] = useState(false);
  const [currRight, setArrowDir] = useState(true);

  const handleArrowClick = () => {
      setShowSpans(!showSpans);
      setArrowDir(!currRight);
  };
  return (
    <>
    <div className="sidebar">
      <button className={`${!currRight ? 'expanded' : ''}`} onClick={() => onButtonClick("places to eat")}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.79 122.88" style={{ enableBackground: 'new 0 0 120.79 122.88' }} xmlSpace="preserve" > <style type="text/css"> {` .st0{fill-rule:evenodd;clip-rule:evenodd;} `} </style> <g> <path className="st0" d="M103.87,44.5h-48H43.39l1.01,4.9c18.68,1.25,32.45,9.27,39.21,17.08c2.6,3,4.42,6.21,5.37,9.34 c1.39,4.58,1.05,9.04-1.13,12.96c-0.28,0.51-0.59,1-0.92,1.48c0.41,0.88,0.72,1.76,0.97,2.61c0.08,0.23,0.16,0.47,0.22,0.71l0.01,0 c0.32,1.13,0.48,2.23,0.48,3.32c0,0.38-0.02,0.26-0.04,0.59l0.01,0.27h0.03c0-0.18,0-0.29,0,0c0,0.28-0.01,0.57-0.03,0.86h15.23 l12.55-54.1H103.87L103.87,44.5L103.87,44.5z M3.19,108.88c23.89-0.04,47.77-0.07,71.66,0c1.42,0.01,2.59,1.17,2.59,2.59 c0,3.86-1.62,11.42-10.35,11.42c-18.71,0-37.42,0-56.13,0c-8.73,0-10.35-7.55-10.35-11.42C0.6,110.04,1.77,108.88,3.19,108.88 L3.19,108.88L3.19,108.88z M56.69,69.07c2.2,0,3.98,1.78,3.98,3.98c0,2.2-1.78,3.98-3.98,3.98c-2.2,0-3.98-1.78-3.98-3.98 C52.71,70.85,54.49,69.07,56.69,69.07L56.69,69.07L56.69,69.07z M21.98,69.35c2.2,0,3.98,1.78,3.98,3.98c0,2.2-1.78,3.98-3.98,3.98 c-2.2,0-3.98-1.78-3.98-3.98S19.78,69.35,21.98,69.35L21.98,69.35L21.98,69.35z M39.19,65.55c2.2,0,3.98,1.78,3.98,3.98 c0,2.2-1.78,3.98-3.98,3.98c-2.2,0-3.98-1.78-3.98-3.98C35.22,67.33,37,65.55,39.19,65.55L39.19,65.55L39.19,65.55z M71.47,86.14 H7.41c-4.07,0-7.41-3.33-7.41-7.4l0,0c0-10.54,21.01-18.2,38.64-18.38C73.35,60.01,88.92,86.14,71.47,86.14L71.47,86.14 L71.47,86.14z M77.27,96.29c0.11,0.19,0.17,0.38,0.17,0.6c0,0.13-0.01,0.28-0.01,0.43c0.01,0.15,0.01,0.29,0.01,0.43 c0,0.21-0.06,0.41-0.17,0.6c-0.59,2.57-2.95,5.93-10.18,5.93c-18.71,0-37.42,0-56.13,0c-7.24,0-9.59-3.36-10.18-5.93 c-0.11-0.19-0.17-0.38-0.17-0.6c0-0.13,0.01-0.28,0.01-0.43c-0.01-0.15-0.01-0.29-0.01-0.43c0-0.21,0.06-0.41,0.17-0.6 c0.59-2.57,2.94-5.93,10.18-5.93h29.07l10.72,11.07l10.65-11.07h5.7C74.33,90.37,76.68,93.73,77.27,96.29L77.27,96.29L77.27,96.29z M88.57,97.75c0.02,0.87,0.03,0.32,0.03,0H88.57L88.57,97.75z M43.48,22.3h31.41l3.42-15.2c0.99-3.67,3.87-5.72,8.95-7.1 c4.31,0,8.62,0,12.92,0c1.97,0.39,3.11,1.76,3.41,4.12c0,1.33,0,2.65,0,3.98c-0.65,2.17-1.96,3.05-3.98,3.41H88.83l-2.29,10.79 h29.72c2.5,0,4.53,2.04,4.53,4.53v5.15c0,2.5-2.04,4.53-4.53,4.53H43.48c-2.5,0-4.53-2.04-4.53-4.53v-5.15 C38.95,24.34,40.99,22.3,43.48,22.3L43.48,22.3L43.48,22.3z M86.38,121.89h5.41h3.12c3.64-0.78,6.17-2.5,7.24-6.11l0.82-8.58H87.92 c0.45,1.35,0.69,2.78,0.69,4.27C88.61,114.23,88.1,118.1,86.38,121.89L86.38,121.89z" /> </g> </svg>
        {showSpans && <span className="button-desc">Places To Eat</span> }
      </button>

      <button className={`${!currRight ? 'expanded' : ''}`} onClick={() => onButtonClick("mess")}>
      <svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"> <g> <path d="m81.574 521.57c0-51.938 46.176-52.273 46.176-122.11 0-36.047-16.105-59.172-21.086-159.49-0.10937-2.2422-8.6523-3.8867-9.0586-1.7891-0.57422 2.9531 3.0977 161.68 2.4102 165.71-0.49219 2.9531-9.1914 3.2148-9.8516-0.21484-0.60156-3.0586-5.7461-159.47-6.2383-164.77-0.40625-4.4414-9.0703-3.1445-10.5-1.7656 0 0-0.21484 165.52-0.45703 167.26-0.39453 2.8672-9.8633 2.9766-10.441 0-0.32031-1.7227-0.45312-167.26-0.45312-167.26-1.4297-1.3672-10.078-2.6641-10.5 1.7656-0.49219 5.3047-5.6406 161.71-6.2383 164.77-0.66016 3.4336-9.3594 3.168-9.8516 0.21484-0.68359-4.0234 3-162.75 2.4102-165.71-0.40625-2.1016-8.9531-0.45703-9.0586 1.7891-4.9805 100.32-21.086 123.45-21.086 159.49 0 69.84 46.164 70.176 46.176 122.11 0 44.027 0.30078 187.85 0 194.63-2.8281 62.59-26.855 132.21-26.855 190.4 0 49.246 39.625 49.246 39.625 49.246s0.40625 0 1.0547-0.023438c0.66016 0.023438 1.0547 0.023438 1.0547 0.023438s39.625 0 39.625-49.246c0-58.211-24.023-127.78-26.867-190.4-0.28516-6.7734 0.011719-150.6 0.011719-194.62z"/> <path d="m1193.3 402.95c0-59.016-26.195-163.67-72-163.67-45.816 0-72 104.64-72 163.67 0 69.77 58.812 70.656 58.812 122.53 0 43.98 0.30078 187.68 0 194.4-2.9141 62.543-27.719 132.06-27.719 190.22 0 49.199 40.871 49.199 40.871 49.199s40.871 0 40.871-49.199c0-58.164-24.793-127.68-27.719-190.22-0.28906-6.7422 0-150.43 0-194.4 0.058594-51.875 58.883-52.754 58.883-122.53z"/> <path d="m596 164c-231.96 0-420 188.04-420 420 0 231.96 188.04 420 420 420 231.96 0 420-188.04 420-420 0-231.96-188.04-420-420-420zm0 720c-165.68 0-300-134.3-300-300 0-165.68 134.32-300 300-300 165.7 0 300 134.32 300 300 0 165.7-134.3 300-300 300z"/> <path d="m878 584c0 155.75-126.25 282-282 282s-282-126.25-282-282 126.25-282 282-282 282 126.25 282 282"/> </g></svg>
      {showSpans && <span className="button-desc">Mess</span> }
      </button>
    </div>
    {currRight && <div className="arrow" onClick={handleArrowClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>}
      {!currRight && <div className="arrow" onClick={handleArrowClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      </div>}
    </>
  );
};

export default FoodSidebar;
