# Check status for api and website

Ce dépôt contient deux scripts d'intégration continue conçus pour vérifier l'état de disponibilité de votre API de production et de votre site web.

## Scripts

### 1. `uptime-api.yaml`

Ce workflow vérifie l'état de l'API de production à chaque heure. Il utilise une tâche programmée pour faire une requête HTTP à l'API et vérifier si elle répond correctement avec un code de statut HTTP 200.

#### Déclencheurs:

- **Planifié**: Exécute le script à chaque heure.
- **Manuel**: Permet un déclenchement manuel via GitHub Actions.

#### Configuration requise:

- `API_URL`: L'URL de l'API doit être configurée dans les secrets de GitHub sous le nom `API_URL`.

### 2. `uptime-website.yaml`

Ce workflow vérifie l'état du site web de production en exécutant des tests end-to-end (E2E) à l'aide de Node.js et npm. Il est également déclenché à chaque heure.

#### Déclencheurs:

- **Planifié**: Exécute le script à chaque heure.

#### Configuration requise:

- `PAGE_URL`: L'URL de la page doit être configurée dans les secrets de GitHub sous le nom `API_URL`.
- Node.js et npm doivent être installés pour exécuter les tests.

## Utilisation

Pour utiliser ces scripts, vous devez cloner le dépôt et configurer les secrets nécessaires dans votre projet GitHub. Assurez-vous que les URL fournies sont accessibles et correctes pour éviter les fausses alertes.

### Configuration des secrets

1. Accédez à votre dépôt GitHub.
2. Cliquez sur `Settings` > `Secrets` > `New repository secret`.
3. Ajoutez les secrets `API_URL` pour l'URL de votre API.

## Contribution

Les contributions à ce dépôt sont les bienvenues. Si vous souhaitez améliorer les scripts existants ou en proposer de nouveaux, veuillez soumettre une pull request avec vos modifications.

## Licence

Ce projet est distribué sous la licence MIT. Voir le fichier `LICENSE` pour plus de détails.
