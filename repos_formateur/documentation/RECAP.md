# ReactJS

* Semanti ui
* react-boostrap
* ever-green

# Outil

* Chrome et Chrome Devtools
* Redux + Redux Devtools
* 'generate-react-cli'
* react-virtualized
* react-helmet

# Architecture SOLID

![](https://miro.medium.com/max/1400/1*QXKvE2F44XTkBi3YDvroWw.jpeg)

# Classification de Composant

* Base
* View (Page)
* Layout
* Feature
* Widget
* Root
* HOC ??

# Composant Best Practices

* SRP
* PropTypes
* defultProps
* PAS de XHR
* Utiliser la strégie 'index.js'
* Avoid Compoennt STATE when possible
* Définir en amont la "lazyness"

# Redux

![](https://azamsharp.com/images/redux-flow.gif)

> Propose une interface de sééparation LOGIC(Applicative)/VUE

**Concepts Clés**

> Utiliser 'redux-dev-tools'

* Store : Présentation du State eaux composant 
    * `dispatch()`
    * `subscribe()`
    * `getState()`
* State : Objet de présentation des données accessble par la vue
* Action : Matérailisation des EVENT logique de la vue (composant)
* reducer : Modification du state en fonction d'une Action
* middlware : Interception de la Action>State

