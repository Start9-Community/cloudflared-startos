import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.8.2:1',
  releaseNotes: {
    en_US: `- Repair Cloudflare Routes asks for confirmation before running.
- Import Public Hostnames' confirmation names the changes it makes in Cloudflare, and its result lists the imported and skipped hostnames one per line, each list copyable.
- Remove DNS Zone starts with no zone selected.
- Add Public Hostname's Subdomain field explains that an existing DNS record for the name is replaced.`,
    es_ES: `- Reparar rutas de Cloudflare pide confirmación antes de ejecutarse.
- La confirmación de Importar nombres de host públicos indica los cambios que hace en Cloudflare, y su resultado enumera los nombres de host importados y omitidos, uno por línea, y cada lista se puede copiar.
- Eliminar zona DNS empieza sin ninguna zona seleccionada.
- El campo Subdominio de Agregar nombre de host público explica que se reemplaza un registro DNS existente para ese nombre.`,
    de_DE: `- „Cloudflare-Routen reparieren“ fragt vor der Ausführung nach einer Bestätigung.
- Die Bestätigung von „Öffentliche Hostnamen importieren“ nennt die Änderungen, die es in Cloudflare vornimmt, und das Ergebnis listet die importierten und übersprungenen Hostnamen zeilenweise auf, jede Liste kopierbar.
- „DNS-Zone entfernen“ beginnt ohne ausgewählte Zone.
- Das Feld „Subdomain“ von „Öffentlichen Hostnamen hinzufügen“ erklärt, dass ein vorhandener DNS-Eintrag für den Namen ersetzt wird.`,
    pl_PL: `- „Napraw trasy Cloudflare” prosi o potwierdzenie przed uruchomieniem.
- Potwierdzenie „Importuj publiczne nazwy hostów” wymienia zmiany, które wprowadza w Cloudflare, a wynik wypisuje zaimportowane i pominięte nazwy hostów, po jednej w wierszu, a każdą listę można skopiować.
- „Usuń strefę DNS” zaczyna bez wybranej strefy.
- Pole „Subdomena” w „Dodaj publiczną nazwę hosta” wyjaśnia, że istniejący rekord DNS dla tej nazwy zostanie zastąpiony.`,
    fr_FR: `- Réparer les routes Cloudflare demande une confirmation avant de s'exécuter.
- La confirmation d'Importer les noms d'hôtes publics indique les modifications apportées dans Cloudflare, et son résultat liste les noms d'hôtes importés et ignorés, un par ligne, chaque liste pouvant être copiée.
- Supprimer la zone DNS démarre sans zone sélectionnée.
- Le champ Sous-domaine d'Ajouter un nom d'hôte public explique qu'un enregistrement DNS existant pour ce nom est remplacé.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

export const CLOUDFLARED_VERSION = '2026.8.2'
