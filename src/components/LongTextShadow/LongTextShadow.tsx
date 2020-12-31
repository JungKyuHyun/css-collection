import React, { memo, useMemo, ReactText } from 'react';
import styled from 'styled-components';

export interface LongTextShadowProps {
  label?: ReactText;
}

export const LongTextShadow = memo<LongTextShadowProps>(({ label }) => {
  const getShadow = useMemo(() => {
    let shadow = '';
    for (let i = 0; i < 400; i++) {
      shadow += (i !== 0 ? ',' : '') + i + 'px ' + i + 'px 0 gray';
    }
    return shadow;
  }, []);

  return <Text shadow={getShadow}>{label}</Text>;
});

const Text = styled.h2<{ shadow: string }>`
  font-size: 5.5em;
  color: white;
  font-weight: 600;
  text-shadow: ${(props) => props.shadow};
  text-transform: uppercase;
`;
