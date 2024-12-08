import { useState, createContext, useEffect } from "react"
import { langs, fallbackLang } from "../constants"
import dicts from "../dict"
import type { DictType } from "../types/dict"

interface LangContextType {
  lang: string
  setLang: CallableFunction
  dict: DictType
}


const navigatorLang = langs.find(l => navigator.language.startsWith(l))
  ?? navigator.languages.reduce((lang, nl) => {
    // al : available lang
    // nl : nav lang

    if (!(lang in [fallbackLang, undefined])) return lang; // means we already found a prefered lang

    return langs.find(al => nl.startsWith(al)) ?? fallbackLang

  }, fallbackLang)

const defaultUserLang = localStorage.getItem("lang") ?? navigatorLang

export const LangContext = createContext<LangContextType>({
  lang: defaultUserLang,
  setLang: () => { },
  dict: dicts[defaultUserLang]
})


export default function LangProvider({ children }) {
  const [lang, setLang] = useState(defaultUserLang)
  const [isFirstRender, setFirstRender] = useState(true);
  const dict = dicts[lang]

  useEffect(() => {
    setFirstRender(false);
    if (isFirstRender) return

    localStorage.setItem("lang", lang)

  }, [lang])

  return <LangContext.Provider value={{ lang, setLang, dict }}>{children}</LangContext.Provider>
}
