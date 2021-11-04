
// Function Memoized
function process(param){
    // First Run Cahce Creation
    process.cache = process.cache || {}
    // Calculation Bailout
    if(process.cache[param]) return process.cache[param];
    
    console.log('Processing value', param);
    // Actual Logic Code Here
    const result = param * param;
    process.cache[param] = result;
    return result;
}

process(10) //  console.log('Processing value', param); 100
process(10) // 100

const translate = async sourceText => {
    const sourceLang = 'fr';
    const targetLang = 'ms';
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
    + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

    await 

translatedText = result[0][0][0];

}

const Comp = ({text}) => {
    
    const [translation,setTanslation] = React.useState('tranlasting...');



    return (
        <p>
            { text, translation}
        </p>
    )
}



