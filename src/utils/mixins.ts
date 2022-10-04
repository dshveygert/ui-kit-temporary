export const viewportWidth = {
  higherThan: (breakpoint: number): string => `@media (min-width: ${breakpoint + 1}px)`,
  lowerThan: (breakpoint: number): string => `@media (max-width: ${breakpoint}px)`,
  between: (breakpointMin: number, breakpointMax: number): string =>
    `@media (max-width: ${breakpointMax}px) and (min-width: ${breakpointMin + 1}px)`
}

export const viewportHeight = {
  higherThan: (breakpoint: number): string => `@media (min-height: ${breakpoint + 1})`,
  lowerThan: (breakpoint: number): string => `@media (max-height: ${breakpoint}px)`,
  between: (breakpointMin: number, breakpointMax: number): string =>
    `@media (max-height: ${breakpointMax})px and (min-height: ${breakpointMin + 1}px)`
}
