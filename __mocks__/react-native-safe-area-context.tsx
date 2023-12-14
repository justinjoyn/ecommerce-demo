import React, {PropsWithChildren} from 'react';

// Turn the view into a pass-through component
export function SafeAreaProvider(props: PropsWithChildren) {
  return <>{props.children}</>;
}

// Turn the view into a pass-through component
export function SafeAreaView(props: PropsWithChildren) {
  return <>{props.children}</>;
}

// Pretend that the whole screen is available
export function useSafeAreaInsets() {
  return {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  };
}

export function useSafeAreaFrame() {
  return {
    height: 844,
    width: 390,
    x: 0,
    y: 0,
  };
}
