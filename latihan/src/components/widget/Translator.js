
import React from 'react';
// import {default as React } from 'react';
import lodash from 'lodash'

const translate = async (sourceText, targetLang = 'ms') => {
    if(!sourceText) throw Error("Invalid sourceText");


    translate.cache = translate.cache || {};
    const cacheKey = sourceText+'/-/'+targetLang;
    if(translate.cache[cacheKey]) return translate.cache[cacheKey];


/*    const sourceLang = 'fr';
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
    + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

    const translatedText = await fetch(url).then(res => res.json()).then(result => result[0][0][0])

  */
    const sourceLang = 'fr';
    const url = "http://localhost:5050/translate?key="+encodeURI(sourceText)
    

    const translatedText = await fetch(url).then(res => res.json()).then(result => result[0] !== undefined? result[0].value:'Translating.')

    //const translatedText= Promise.resolve('Hola');
    translate.cache[cacheKey] = translatedText;
    return translatedText;

}

const debouncedTranslate = lodash.debounce(
    (text, target, cb) => translate(text, target).then(cb)
, 300);


export const Translator = React.memo(({children:text, target = 'fr'}) => {
    
    const [translation, setTranslation] = React.useState('Translating...');

    React.useEffect(
        () => {
            if(text) debouncedTranslate(text,target, setTranslation );
        }
    ,[text, target])

    console.log('Translate');
    return (
        <p>
            { translation }
        </p>
    )
})



