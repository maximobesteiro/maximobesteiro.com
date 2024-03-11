import { useWindowSize } from 'usehooks-ts';

/**
 * Returns the device type based on the window width.
 * @returns {'mobile' | 'tablet' | 'desktop'} The device type.
 */
export default function useDeviceSize(): 'mobile' | 'tablet' | 'desktop' {
  const { width }: { width: number } = useWindowSize();

  if (width < 768) {
    return 'mobile';
  } else if (width < 1024) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}
