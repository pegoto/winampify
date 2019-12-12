import React from "react";

interface Props {
  color: string;
  size: number;
}

const FilterIcon = (props: Props) => (
  <svg
    height={props.size}
    width={props.size}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color}
  >
    <path
      // tslint:disable-next-line: max-line-length
      d="M166.4 243.2h-85.333333c-21.333333 0-38.4-17.066667-38.4-42.666667 0-21.333333 17.066667-38.4 38.4-38.4h85.333333C183.466667 119.466667 226.133333 85.333333 277.333333 85.333333s93.866667 34.133333 110.933334 76.8h554.666666c21.333333 0 38.4 17.066667 38.4 38.4s-17.066667 38.4-38.4 38.4h-554.666666c-17.066667 46.933333-59.733333 81.066667-110.933334 81.066667s-93.866667-34.133333-110.933333-76.8z m110.933333 0c21.333333 0 38.4-17.066667 38.4-38.4s-17.066667-38.4-38.4-38.4c-21.333333-4.266667-38.4 12.8-38.4 34.133333 0 25.6 17.066667 42.666667 38.4 42.666667zM558.933333 554.666667H81.066667c-21.333333 0-38.4-17.066667-38.4-38.4s17.066667-38.4 38.4-38.4h477.866666c17.066667-46.933333 59.733333-76.8 110.933334-76.8s93.866667 34.133333 110.933333 76.8h162.133333c21.333333 0 38.4 17.066667 38.4 38.4s-17.066667 38.4-38.4 38.4h-162.133333c-17.066667 46.933333-59.733333 76.8-110.933333 76.8s-93.866667-29.866667-110.933334-76.8z m110.933334 0c21.333333 0 38.4-17.066667 38.4-38.4s-17.066667-38.4-38.4-38.4-38.4 17.066667-38.4 38.4 17.066667 38.4 38.4 38.4zM166.4 866.133333h-85.333333c-21.333333 0-38.4-17.066667-38.4-38.4s17.066667-38.4 38.4-38.4h85.333333c17.066667-46.933333 59.733333-76.8 110.933333-76.8s93.866667 34.133333 110.933334 76.8h554.666666c21.333333 0 38.4 17.066667 38.4 38.4s-17.066667 38.4-38.4 38.4h-554.666666c-17.066667 46.933333-59.733333 76.8-110.933334 76.8s-93.866667-29.866667-110.933333-76.8z m110.933333 0c21.333333 0 38.4-17.066667 38.4-38.4s-17.066667-38.4-38.4-38.4-38.4 17.066667-38.4 38.4 17.066667 38.4 38.4 38.4z"
      fill="#4C4C4C"
    />
  </svg>
);

export default FilterIcon;
