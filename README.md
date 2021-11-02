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

## Creation d'une application : Back-end vente

préparation scafolder de composant : `generate-react-cli`
mise en place du 'generate-react-cli.json'

creation de la première page (Login): 
    
    npx generate-react-cli component ViewDashboard ViewLogin ViewStock --type=view
    npx generate-react-cli component BaseCard BaseInput BaseButton BaseGraph BaseMenu --type=base
    npx generate-react-cli component LayoutDefault LayoutFooter LayoutHeader LayoutContent --type=layout
    npx generate-react-cli component FeatureLogin FeatureIncidentTIckets FeatureOrders FeatureProducts FeatureSales FeatureStockOverview --type=feature

Ajout de la dépendance : `npm i prop-types`