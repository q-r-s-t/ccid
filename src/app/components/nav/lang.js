"use client"
import { useLanguageStore } from "@/app/store/languageStore"

export default function LanguageToggle({textColor}){
    const {lang, toggleLang} = useLanguageStore();
    return(
        <button onClick={toggleLang} className={`font-[300] leading-tight lg:text-[1.2vw] z-[500] absolute top-0 right-0 lg:pt-4 lg:pr-10`} style={{color : textColor}}>
           EN / KR
        </button>
    );
}