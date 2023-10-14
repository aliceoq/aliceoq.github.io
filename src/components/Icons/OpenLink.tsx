import { IconProps } from "../../utils/types";
import { SvgIcon } from "./style";

function OpenLink({ size }: IconProps) {
  return (
    <SvgIcon size={size}>
      <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 32H4V4H18V0H4C1.79 0 0 1.79 0 4V32C0 34.21 1.79 36 4 36H32C34.21 36 36 34.21 36 32V18H32V32ZM22 0V4H29.17L9.51 23.66L12.34 26.49L32 6.83V14H36V0H22Z" />
      </svg>
    </SvgIcon>
  );
}

export default OpenLink;
