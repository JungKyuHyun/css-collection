import React, { memo, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { DragItem } from './DragItem';

export interface DragOptions {
  label?: ReactNode;
  value?: string;
  disabled?: boolean;
}

interface DragItemListProps {
  className?: string;
  options?: ReadonlyArray<DragOptions>;
  isReset?: boolean;
  onChange?: (newOptions: ReadonlyArray<DragOptions>) => void;
}

export const DragItemList = memo<DragItemListProps>(({ className, options, onChange, isReset = false }) => {
  const [dargList, setDragList] = useState(options);
  const draggedValue = React.useRef<string>();
  const resetInitialValue = useRef<ReadonlyArray<DragOptions>>();

  useEffect(() => {
    if (isReset && resetInitialValue.current !== undefined) {
      setDragList(resetInitialValue.current);
    }
  }, [isReset]);

  useEffect(() => {
    if (resetInitialValue.current === undefined) {
      resetInitialValue.current = options;
    }
  }, [options]);

  useEffect(() => {
    if (dargList && onChange !== undefined) {
      onChange(dargList);
    }
  }, [dargList, onChange]);

  const handleChange = useCallback((dragValue?: string, dropValue?: string) => {
    setDragList((preDragList) => {
      if (preDragList === undefined) {
        console.error('options is empty.');
        return;
      }

      if (dragValue !== undefined) {
        draggedValue.current = dragValue;
      }

      const defineList = preDragList.filter((l) => l.value !== draggedValue.current);
      const dropValueIndex = preDragList.findIndex((d) => d.value === dropValue);
      const draggedOption = preDragList.find((d) => d.value === draggedValue.current);

      if (draggedOption === undefined) {
        console.error('The dragged value could not be found.');
        return preDragList;
      }

      const forwardList = defineList.slice(0, dropValueIndex);
      const backwardList = defineList.slice(dropValueIndex);
      return [...forwardList, draggedOption, ...backwardList];
    });
  }, []);

  if (dargList === undefined) {
    return null;
  }

  return (
    <>
      {dargList.map(({ label, value, disabled }) => (
        <DragItem
          className={className}
          key={value}
          label={label}
          value={value}
          disabled={disabled}
          onChange={handleChange}
        />
      ))}
    </>
  );
});
