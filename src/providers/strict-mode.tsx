import { Fragment, StrictMode } from "react"

// strict component is just fragment in production
const Strict = import.meta.env.DEV ? StrictMode : Fragment

export default function StrictProvider({children}) {
  return <Strict>{children}</Strict>
}
