import { useEffect, useState } from 'react';

/**
 * Hook personalizado para manejar la hidratación en Next.js
 * Evita errores de hidratación al asegurar que el componente esté completamente hidratado
 * antes de renderizar contenido que depende del estado del cliente
 */
export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}
