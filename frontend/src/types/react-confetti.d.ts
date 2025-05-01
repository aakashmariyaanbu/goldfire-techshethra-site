declare module 'react-confetti' {
  import * as React from 'react';
  
  interface ConfettiProps {
    width?: number;
    height?: number;
    numberOfPieces?: number;
    confettiSource?: {
      x?: number;
      y?: number;
      w?: number;
      h?: number;
    };
    recycle?: boolean;
    wind?: number;
    gravity?: number;
    colors?: string[];
    opacity?: number;
    run?: boolean;
    tweenDuration?: number;
    tweenFunction?: (currentTime: number, currentValue: number, targetValue: number, duration: number, s?: number) => number;
    drawShape?: (ctx: CanvasRenderingContext2D) => void;
    onConfettiComplete?: () => void;
  }
  
  const Confetti: React.FunctionComponent<ConfettiProps>;
  
  export default Confetti;
} 