import { useEffect } from "react";

export function useMountEffect(effect: () => void | (() => void)) {
  // eslint-disable-next-line react-hooks/exhaustive-deps -- mount-only effect, deps jsou záměrně prázdné
  useEffect(effect, []);
}
