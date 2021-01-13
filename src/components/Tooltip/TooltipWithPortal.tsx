import React, { memo, FC, useRef, useCallback, useState, ReactNode, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Portal } from '../Portal';

export interface TooltipWithPortalProps {
  className?: string;
  contents?: ReactNode;
  maxWidth?: number;
  space?: number;
}

export const TooltipWithPortal: FC<TooltipWithPortalProps> = memo(
  ({ children, className, contents, maxWidth = 260, space = 16 }) => {
    const toolTipContainerref = useRef<HTMLSpanElement>(null);
    const toolTipContentsRef = useRef<HTMLDivElement>(null);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
      if (toolTipContainerref === null || toolTipContainerref.current === null) {
        return;
      }
      if (toolTipContentsRef === null || toolTipContentsRef.current === null || !isShow) {
        return;
      }
      const domRect = toolTipContainerref.current.getBoundingClientRect();
      const contentsWidth = toolTipContentsRef.current.clientWidth;
      const noPokeOffLeftSideSize = domRect.left + domRect.width / 2 - contentsWidth / 2;
      const noPokeOffRightSideSize = Math.max(space, noPokeOffLeftSideSize);

      toolTipContentsRef.current.style.left =
        Math.min(noPokeOffRightSideSize, document.body.clientWidth - contentsWidth - space) + 'px';

      if (domRect.top < window.innerHeight / 2) {
        toolTipContentsRef.current.style.top = domRect.top + domRect.height + space + 'px';
      } else {
        toolTipContentsRef.current.style.bottom = window.innerHeight - domRect.top - space + 'px';
      }
      toolTipContentsRef.current.style.visibility = 'visible';
    }, [maxWidth, isShow, space]);

    const handleMouseOver = useCallback((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      event.persist();
      setIsShow(true);
    }, []);

    const handleMouseOut = useCallback(() => {
      setIsShow(false);
    }, []);

    return (
      <TooltipContainer ref={toolTipContainerref} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {children}
        {isShow && (
          <Portal className="jacob-css-tooltip">
            <ContentsContainer className={className} ref={toolTipContentsRef} maxWidth={maxWidth} role="tooltip">
              {contents}
            </ContentsContainer>
          </Portal>
        )}
      </TooltipContainer>
    );
  }
);

const animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ContentsContainer = styled.div<{ maxWidth: number }>`
  position: fixed;
  max-width: ${(props) => props.maxWidth}px;
  white-space: pre-line;
  word-wrap: break-word;
  visibility: hidden;
  background: white;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  color: black;
  animation: ${animation} 0.2s ease-in-out forwards;
  pointer-events: none;
`;

const TooltipContainer = styled.span`
  transition: 0.5s;
  color: darkcyan;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    box-shadow: 0 0 0 2px black, 0 0 0 4px darkcyan;
  }
`;
