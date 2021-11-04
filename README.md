# Formation react Avancee

## Configuration Env.

* Vérification des versions : 

    > node -v 
    v16.13.0
    > npm -v
    8.1.0

* Ajout des templates : 
`npm i -g create-react-app create-react-component create-react-library generate-react-cli`

* Creation de l'application :  `create-react-app latihan`
* Ajout d'un serveur de mock : 

    * New forder : /mock-api/
    * `npm init -y`
    * install d'un serveur JSON : `npm i json-server`

`npm run start` ou `npm start` est possible car il existe des alias pour certaines commande commune

* Install d'extension Vscode : `burkeholland.react-food-truck` and `OfHumanBondage.react-proptypes-intellisense`
* setting Vscode :
    * find : `emmet`
    * include languages add : javascript / javascriptreact

* Dev tools : > ... / moreTools / `performance monitoring` : DOM NODES and style recalcs per s

* plugin material icon Theme : `PKief.material-icon-theme` (permet un ux de vscode plus detaillé)

* S.O.L.I.D : 
![SOLID IMAGE](https://devopedia.org/images/article/177/8101.1558682601.png)

## Creation d'une application : Back-end vente

préparation scafolder de composant : `generate-react-cli`
mise en place du 'generate-react-cli.json'

creation de la première page (Login): 
    
    npx generate-react-cli component ViewDashboard ViewLogin ViewStock --type=view
    npx generate-react-cli component BaseCard BaseInput BaseButton BaseGraph BaseMenu --type=base
    npx generate-react-cli component LayoutDefault LayoutFooter LayoutHeader LayoutContent --type=layout
    npx generate-react-cli component FeatureLogin FeatureIncidentTIckets FeatureOrders FeatureProducts FeatureSales FeatureStockOverview --type=feature

Ajout de la dépendance : `npm i prop-types`

Install de redux : `npm i redux`

Install : `npm i redux-devtools-extension`
ajout dans chrome les reduc devtools : https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr


## Lib utile : 

* react-helmet
* react-virtualized : chargement dynamic (http://bvaughn.github.io/react-virtualized/#/components/Grid)
* Docs en ligne : https://devdocs.io/
* point entrée pour de la veille techno: https://awesome.re/ ou recherche google préfixer de awesome
* fonction utilitaire logic : https://lodash.com/
* Axios : librairy utilitaire pour les utlisation de fetch/XmlHttpRequest : https://axios-http.com/
* https://nextjs.org/
* react-inject-env : REACT_APP_BACKEND=http:://dfsdklfsjdfklsdf npx react-inject-env set
* npx npkill (fidage total)


## Ajout d'une librairie de composant

    npm install semantic-ui-react semantic-ui-css


## Event Delegation 
cas de plusieur Event listener creer pour rien : 

    // this.clickHandler = this.clickHandler.bind(this)
    clickHandler = evt => {
        console.log(evt.target,this)
    }

    render(){
        return (
        <React.Fragment>
            <div>
            <BaseButton onClick={ this.clickHandler }>A</BaseButton>
            <BaseButton onClick={ this.clickHandler }>B</BaseButton>
            <BaseButton onClick={ () => this.clickHandler() }>C</BaseButton>
            </div>

meilleur implementation : 

    // this.clickHandler = this.clickHandler.bind(this)
    clickHandler = evt => {
        console.log(evt.target,this)
    }

    render(){
        return (
        <React.Fragment>
            <div onClick={ this.clickHandler }>
            <BaseButton>A</BaseButton>
            <BaseButton>B</BaseButton>
            <BaseButton>C</BaseButton>
            </div>

## Principe de memoization avec cache
    
> exemple de code de memoization equivalant a ce que fait useMemo(), la avec un cache

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


## stratégie de debounce

> permet de retarder une execution de fonction/action

cette stratégie permet une optimisation les performances nos applications

https://lodash.com/

    npm i lodash


## Redux and reduc middelwares

![](https://azamsharp.com/images/redux-flow.gif)

> ajout de 'redux-observable' 

    npm install redux-observable rxjs