import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 15 13"
    aria-hidden="true"
    stroke="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="M.544 5.794c-.39.39-.39 1.025 0 1.415l5 5a1.002 1.002 0 0 0 1.415-1.415L3.662 7.5h9.588a.999.999 0 1 0 0-2H3.666l3.29-3.294A1.002 1.002 0 0 0 5.541.791l-5 5z"
    />
  </svg>
);
export default SvgArrowSvg;
