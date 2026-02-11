
export interface HeartData {
  id: number;
  size: number;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
}

export interface NoButtonPosition {
  x: number | string;
  y: number | string;
  isAbsolute: boolean;
}
