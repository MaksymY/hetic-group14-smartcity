# hetic-group14-smartcity

Project of SmartCity for Hetic.

Personnes concernées par l'expertise Front: Wilem et Maksym.

Map SVG: 

- Nous avons préferer utiliser une map de SVG plûtot que d'utiliser une map importer comme celle de google ou encore Leaflet. Dans notre cas d'usage qui était d'indiquer la densité de population dans chaque arrondissement c'était beaucoup plus simple de modifier des SVG.

Librairies utilsées:

- Nous avons utilisé <em>Moment.js</em> pour interpréter facilement les dates en provenance de la base de données. Nous avions hésité à utiliser dateFns noux l'avons déjà utilisé en entrprise mais nous avons voulu nous essayer à une nouvelle librairie.

- Nous avons aussi utilisé <em>Axios</em> pour faciliter les requêtes vers le back malgré la facilté d'utilisation de fetch. Nous avons voulu gagner du temps notamment car Axios convertie directement en json la réponse de la requête mais aussi pour ça large prise en charge des navigateurs, car vue qu'on ciblait les managers des agents d'entretien nous étions pas sûr qu'il utilise un navigateur récent. (sans oublier aussi le fait d'utiliser une librairie que nous n'avions jamais utilisée comparée aux requêtes fetch).

- Nous avons utilser aussi les <em>Styled Component</em> pour nous former à cette librairie CSS contrairement au SCSS.

Lien vers les librairies utilisées pour la partie front : 

- Moment.js: https://momentjs.com/
- Axios: https://github.com/axios/axios
- Styled Component: https://styled-components.com/


