import React from 'react';

const InstaIcon = ({ blue }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.4801 7.45136H25.6172M9.58853 1.03987H22.4115C24.6787 1.03987 28.136 0.657546 29.7392 2.26073C31.3424 3.86391 30.9601 7.32128 30.9601 9.58852V22.4115C30.9601 24.6787 31.3422 28.1357 29.739 29.7389C28.1358 31.3421 24.6787 30.9601 22.4115 30.9601H9.58853C7.32129 30.9601 3.86427 31.3421 2.26109 29.7389C0.65791 28.1357 1.03989 24.6787 1.03989 22.4115V9.58852C1.03989 7.32128 0.657461 3.86437 2.26064 2.26119C3.86382 0.658006 7.32129 1.03987 9.58853 1.03987ZM16 22.4115C14.2996 22.4115 12.6688 21.736 11.4664 20.5336C10.264 19.3312 9.58853 17.7004 9.58853 16C9.58853 14.2996 10.264 12.6688 11.4664 11.4664C12.6688 10.264 14.2996 9.58852 16 9.58852C17.7005 9.58852 19.3312 10.264 20.5336 11.4664C21.736 12.6688 22.4115 14.2996 22.4115 16C22.4115 17.7004 21.736 19.3312 20.5336 20.5336C19.3312 21.736 17.7005 22.4115 16 22.4115Z"
        fill="white"
        stroke={`${blue ? '#211539' : 'white'}`}
        stroke-width="1.86667"
      />
    </svg>
  );
};

export default InstaIcon;
