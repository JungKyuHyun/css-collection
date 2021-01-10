import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactNode, useCallback, useRef } from 'react';
import styled from 'styled-components';

interface DragItemProps {
  className?: string;
  label?: ReactNode;
  value?: string;
  disabled?: boolean;
  onChange?: (dragValue?: string, dropValue?: string) => void;
}

export const DragItem = memo<DragItemProps>(({ className, label, value = '', onChange, disabled = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const drageedValue = useRef<string>();
  const droppedValue = useRef<string>();

  const handleDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      if (ref === null || ref.current === null) {
        return;
      }
      ref.current.style.opacity = '0.4';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('drag', value);
      drageedValue.current = value;
    },
    [value]
  );

  const handleDragEnd = useCallback(() => {
    if (ref !== null && ref.current !== null) {
      ref.current.style.opacity = '1';
      ref.current.style.color = 'lightgray';
      ref.current.style.border = '2px solid transparent';
    }
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDragEnter = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.color = 'cyan';
    ref.current.style.border = '2px solid cyan';
    droppedValue.current = value;
    if (onChange !== undefined) {
      onChange(drageedValue.current, droppedValue.current);
    }
  }, [value, onChange]);

  const handleDragLeave = useCallback(() => {
    if (ref !== null && ref.current !== null) {
      ref.current.style.color = 'lightgray';
      ref.current.style.border = '2px solid transparent';
      drageedValue.current = undefined;
      droppedValue.current = undefined;
    }
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (ref !== null && ref.current !== null) {
        ref.current.style.color = 'lightgray';
        ref.current.style.border = '2px solid transparent';
      }
      if (onChange !== undefined) {
        onChange(event.dataTransfer.getData('drag'), droppedValue.current);
      }
      drageedValue.current = undefined;
      droppedValue.current = undefined;
    },
    [onChange]
  );

  return (
    <Item
      className={className}
      ref={ref}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable={!disabled}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
    >
      <Title>{label}</Title>
      <FontAwesomeIcon icon={faBars} size="2x" />
    </Item>
  );
});

const Item = styled.div`
  background: black;
  color: lightgray;
  border-radius: 4px;
  box-shadow: 2px 2px 10px white, 2px 2px 20px white, inset 0.5px 0.5px 4px white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  cursor: grab;
  transition: all 0.4s ease-in-out;
  border: 2px solid transparent;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Title = styled.span`
  text-transform: uppercase;
  font-weight: 600;
`;
