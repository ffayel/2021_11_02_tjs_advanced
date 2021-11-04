
import React from 'react';
// import {default as React } from 'react';

const translate = async (sourceText, targetLang = 'ms') => {
    if(!sourceText) throw Error("Invalid sourceText");


    translate.cache = translate.cache || {};
    const cacheKey = sourceText+'/-/'+targetLang;
    if(translate.cache[cacheKey]) return translate.cache[cacheKey];


    const sourceLang = 'fr';
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
    + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

    const translatedText = await fetch(url).then(res => res.json()).then(result => result[0][0][0])
    translate.cache[cacheKey] = translatedText;
    return translatedText;

}

export const Translator = ({children:text, target = 'fr'}) => {
    
    const [translation, setTranslation] = React.useState('Translating...');

    React.useEffect(
        ()=>{
            if(text){
                translate(text,target).then( setTranslation );
            }
        }
    ,[text, target])

    return (
        <p>
            { translation }
        </p>
    )
}



