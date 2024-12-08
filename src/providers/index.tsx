import StrictProvider from "./strict-mode.tsx"
import LangProvider from "./lang.tsx"

export default function Providers({ children }) {
  return <>
    <StrictProvider>
      <LangProvider>
        {children}
      </LangProvider>
    </StrictProvider>
  </>
}
