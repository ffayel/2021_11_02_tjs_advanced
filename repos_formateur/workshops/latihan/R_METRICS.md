# Web Application Metrics

* Temps de chargement : 2s. (TFMP)
* Temps interactif : 7s. ( TTI )
* Charge Navigateur :
    * Charge Mémoire
        * Charge Initial :  35K object
    * Affichage
        * 60fps - 16.5ms
        * CSS
        * DOM 
            - Light : 5-7k
            - Medium : 7 - 15k
            - Dense : > 15k
* Performance :
    * Percue par l'utilisateur
        * Chargment
            - Import inutile
        * Réactivité des interactions
            - Attention : 
                - Data Fetching
                - Render ( DOM, CSS, Script 16ms)  
    * Dév Team   
        * Maintenabilité
            - Design Principles
        * Scalabilité
            - Design Principles

> Complex vs Complicated

# S.O.L.I.D

. Single Respsonsability Pattern
. Open Close
. Liskov (Substitution)
. I (Interface Segregation) 
. Dependency Inversion 

# Classification Des Composant

* RootComponent
* ViewComponent
* LayoutComponent
* FeatureComponent (UX)
    * WidgetComponent (UX)
* BaseComponent ( stateless de préférence )

# Couche Logique

> Compoent State vs Application State

Application State
 * Métier
 * Technique (context)

# Redux

> Application State Manager

Facade (Store)
Action ( REPRESENTATIOn FONCTOINNELLES )





* Temps Authenitfication : 15s. ( Depends on System )
