import styled from "styled-components";
import { IconProps, iconSizes } from "../../utils/types";

export const SvgIcon = styled.div<IconProps>`
  svg {
    width: ${(props) => iconSizes[props.size].width};
    height: ${(props) => iconSizes[props.size].height};
    fill: ${(props) => props.theme.color.text};
  }
`;
