# Dossier Assets

## Comment ajouter votre CV PDF :

1. **Placez votre fichier PDF ici :**
   - Nommez votre fichier : `CV_AZIAMALE_Fidele.pdf`
   - Déposez-le dans ce dossier `src/assets/`

2. **Le système va automatiquement :**
   - Essayer de télécharger le fichier PDF d'abord
   - Si le PDF n'existe pas, il générera automatiquement une version texte
   - Le bouton "Télécharger CV" fonctionnera dans tous les cas

3. **Structure attendue :**
   ```
   src/
   └── assets/
       └── CV_AZIAMALE_Fidele.pdf  (votre fichier PDF ici)
   ```

4. **Remarque :**
   - Assurez-vous que le nom du fichier est exactement `CV_AZIAMALE_Fidele.pdf`
   - Le PDF sera prioritaire sur la version texte
   - Le fallback texte garantit que le bouton fonctionne toujours
