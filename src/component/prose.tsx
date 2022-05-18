import * as React from 'react';
import { chakra, HTMLChakraProps, ThemingProps, useStyleConfig } from '@chakra-ui/system';

export interface ProseProps extends HTMLChakraProps<'div'>, ThemingProps<'Prose'> { }

export function Prose(props: ProseProps) {
  const { children } = props;
  const styles = useStyleConfig('Prose', { ...props });

  return (
    <chakra.div __css={styles}>
      {children}
    </chakra.div>
  );
}