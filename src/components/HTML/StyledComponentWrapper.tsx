import React, { ReactNode } from 'react';

/*
  Used to avoid duplication of having to create styled component with children each time.
 */

export function StyledComponentWrapper<T>(
  props: T & { children?: ReactNode },
  component: React.ComponentType,
) {
  const Component = component;
  return <Component {...props}>{props?.children}</Component>;
}
