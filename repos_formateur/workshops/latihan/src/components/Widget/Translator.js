
import React from 'react';
// import {default as React } from 'react';
import lodash from 'lodash';

const translate = lodash.memoize(async (sourceText, targetLang = 'ms') => {
    console.warn('Tranlator Function');

    if (!sourceText) throw Error("Invalid sourceText");

    console.log('Translator');

    /*
    const sourceLang = 'fr';
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
        + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

    const translatedText = await fetch(url).then(res => res.json()).then(result => result[0][0][0])

    return translatedText; 
    */
    const translatedText = Math.random();
    return translatedText;  
})

const debouncedTranslate = lodash.debounce(
    (text, target, cb) => translate(text, target).then(cb)
, 300);


export const Translator = ({ children: text, target = 'fr' }) => {

    const [translation, setTranslation] = React.useState('Translating...');

    React.useEffect(
        () => {
            if (text) debouncedTranslate(text, target, setTranslation)
        }
        ,[text, target])

    return (
        <p>
            {translation}
        </p>
    )
}



