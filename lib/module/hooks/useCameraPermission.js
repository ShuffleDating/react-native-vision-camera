import { useCallback, useState } from 'react';
import { Camera } from '../Camera';
/**
 * Returns whether the user has granted permission to use the Camera, or not.
 *
 * If the user doesn't grant Camera Permission, you cannot use the `<Camera>`.
 *
 * @example
 * ```tsx
 * const { hasPermission, requestPermission } = useCameraPermission()
 *
 * if (!hasPermission) {
 *   return <PermissionScreen onPress={requestPermission} />
 * } else {
 *   return <Camera ... />
 * }
 * ```
 */
export function useCameraPermission() {
  const [hasPermission, setHasPermission] = useState(() => Camera.getCameraPermissionStatus() === 'granted');
  const requestPermission = useCallback(async () => {
    const result = await Camera.requestCameraPermission();
    const hasPermissionNow = result === 'granted';
    setHasPermission(hasPermissionNow);
    return hasPermissionNow;
  }, []);
  return {
    hasPermission,
    requestPermission
  };
}

/**
 * Returns whether the user has granted permission to use the Microphone, or not.
 *
 * If the user doesn't grant Audio Permission, you can use the `<Camera>` but you cannot
 * record videos with audio (the `audio={..}` prop).
 *
 * @example
 * ```tsx
 * const { hasPermission, requestPermission } = useMicrophonePermission()
 * const canRecordAudio = hasPermission
 *
 * return <Camera video={true} audio={canRecordAudio} />
 * ```
 */
export function useMicrophonePermission() {
  const [hasPermission, setHasPermission] = useState(() => Camera.getMicrophonePermissionStatus() === 'granted');
  const requestPermission = useCallback(async () => {
    const result = await Camera.requestMicrophonePermission();
    const hasPermissionNow = result === 'granted';
    setHasPermission(hasPermissionNow);
    return hasPermissionNow;
  }, []);
  return {
    hasPermission,
    requestPermission
  };
}
//# sourceMappingURL=useCameraPermission.js.map