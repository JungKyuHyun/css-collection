import React, { memo, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MenuItem } from './MenuItem';

export type ItemsTypes = ReadonlyArray<{
  label: string;
  value?: number | string | string[];
  fn: (v?: number | string | string[]) => void;
}>;

type Props = {
  className?: string;
  list: ReadonlyArray<{
    text: string;
    items?: ItemsTypes;
  }>;
};

export const Menu = memo<Props>(({ className, list }) => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const togglePopover = useCallback(
    (index: number) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenedIndex(openedIndex === index ? null : index);
    },
    [openedIndex]
  );

  const closeAll = useCallback((e: MouseEvent) => {
    if (e.target !== null && (e.target as HTMLElement).nodeName !== 'SPAN') {
      setOpenedIndex(null);
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', closeAll);
    return () => {
      document.body.removeEventListener('click', closeAll);
    };
  });

  return (
    <div>
      {list.map(({ text, items = [] }, i) => (
        <MenuItem key={`menuItem${i}`} text={text} open={openedIndex === i} onToggle={togglePopover(i)}>
          {items.length > 0 &&
            items.map(({ label, value, fn }) => {
              const handleClick = () => {
                fn(value);
                setOpenedIndex(null);
              };
              return (
                <ContextMenu key={label} onClick={handleClick}>
                  {label}
                </ContextMenu>
              );
            })}
        </MenuItem>
      ))}
    </div>
  );
});

const ContextMenu = styled.span`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  margin: 0 16px;
  transition: all 0.3s ease;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    margin: 0;
    padding-left: 16px;
    padding-right: 16px;
    background: lightgray;
  }
`;
