"use client"
import { useLanguageStore } from "@/app/store/languageStore"

export default function LanguageToggle({textColor}){
    const {lang, toggleLang} = useLanguageStore();
    return(
        <button onClick={toggleLang} className={`lg:font-[300] leading-relaxed text-xl font-normal lg:text-[1vw] z-[300] w-fit fixed bottom-0 left-0 pl-4 pb-10 lg:pb-0 lg:top-0 lg:left-auto lg:right-0 lg:pt-4 lg:pr-10`} style={{color : textColor}}>
           EN / KR
        </button>
    );
}