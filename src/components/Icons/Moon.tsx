import { IconProps } from "../../utils/types";
import { SvgIcon } from "./style";

function Moon({ size }: IconProps) {
  return (
    <SvgIcon size={size}>
      <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.63 16C14.26 16.0323 11.9729 15.1284 10.2654 13.4845C8.55784 11.8406 7.56772 9.58953 7.51 7.22C7.51045 6.05734 7.74637 4.90682 8.20353 3.83781C8.66069 2.76881 9.32963 1.80346 10.17 1C7.67869 1.24598 5.36563 2.40221 3.67367 4.24731C1.98171 6.09242 1.02973 8.49675 1 11C1.06038 13.7063 2.19095 16.2784 4.14403 18.1527C6.09712 20.0271 8.71349 21.0509 11.42 21C13.4355 21.0176 15.4129 20.4508 17.1131 19.3683C18.8132 18.2857 20.1633 16.7337 21 14.9C19.6555 15.6194 18.1548 15.9971 16.63 16Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}

export default Moon;
