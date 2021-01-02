import React, { memo, useCallback, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

export const SlidingMenuIndicator = memo(() => {
  const markerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

  const handleLinkRef = useCallback((ref: HTMLAnchorElement | null) => {
    if (ref !== null && !linkRefs.current.includes(ref)) {
      linkRefs.current.push(ref);
    }
  }, []);

  const moveIndicator = useMemo(
    () =>
      throttle((ref: HTMLAnchorElement) => {
        if (markerRef === null || markerRef.current === null) {
          return;
        }
        markerRef.current.style.top = ref.offsetTop + 'px';
        markerRef.current.style.width = ref.offsetWidth + 'px';
      }, 150),
    [],
  );

  useEffect(() => {
    linkRefs.current.forEach((ref) => {
      ref.addEventListener('mousemove', () => moveIndicator(ref));

      return () =>
        ref.removeEventListener('mousemove', () => moveIndicator(ref));
    });
  }, [moveIndicator]);

  return (
    <Menu>
      <Marker ref={markerRef} />
      {['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'].map(
        (el) => {
          return (
            <Item key={el}>
              <Link href="#" ref={handleLinkRef}>
                {el}
              </Link>
            </Item>
          );
        },
      )}
    </Menu>
  );
});

const Menu = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Marker = styled.div`
  position: absolute;
  top: 0;
  height: 50px;
  background: cyan;
  border-radius: 4px;
  transition: 0.2s;
`;

const Item = styled.li`
  list-style: none;
`;

const Link = styled.a`
  position: relative;
  font-size: 2em;
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0 20px;
  margin: 10px 0;
`;
