import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.8.2:1',
  releaseNotes: {
    en_US: `Updated cloudflared to 2026.8.2.

Fixes two request-rewriting regressions that upstream shipped in 2026.8.0 and 2026.8.1 and told users not to run: trailing slashes were stripped from requests forwarded to HTTP origins (causing redirect loops in apps that expect canonical trailing-slash URLs), and percent-encoded paths were normalized before being forwarded.

[Full release notes](https://github.com/cloudflare/cloudflared/releases/tag/2026.8.2)

- Repair Cloudflare Routes asks for confirmation before running.
- Import Public Hostnames' confirmation names the changes it makes in Cloudflare, and its result lists the imported and skipped hostnames one per line, each list copyable.
- Remove DNS Zone starts with no zone selected.
- Add Public Hostname's Subdomain field explains that an existing DNS record for the name is replaced.`,
    es_ES: `Actualizado cloudflared a 2026.8.2.

Corrige dos regresiones en la reescritura de solicitudes que aparecieron en las versiones 2026.8.0 y 2026.8.1, que el proyecto original desaconsejó usar: se eliminaban las barras finales de las solicitudes reenviadas a orígenes HTTP (provocando bucles de redirección en aplicaciones que esperan URLs canónicas con barra final) y las rutas codificadas en porcentaje se normalizaban antes de reenviarse.

[Notas de la versión completas](https://github.com/cloudflare/cloudflared/releases/tag/2026.8.2)

- Reparar rutas de Cloudflare pide confirmación antes de ejecutarse.
- La confirmación de Importar nombres de host públicos indica los cambios que hace en Cloudflare, y su resultado enumera los nombres de host importados y omitidos, uno por línea, y cada lista se puede copiar.
- Eliminar zona DNS empieza sin ninguna zona seleccionada.
- El campo Subdominio de Agregar nombre de host público explica que se reemplaza un registro DNS existente para ese nombre.`,
    de_DE: `cloudflared auf 2026.8.2 aktualisiert.

Behebt zwei Regressionen beim Umschreiben von Anfragen aus 2026.8.0 und 2026.8.1, von deren Einsatz das Upstream-Projekt abgeraten hat: Abschließende Schrägstriche wurden aus Anfragen an HTTP-Ursprünge entfernt (was zu Weiterleitungsschleifen in Anwendungen führte, die kanonische URLs mit Schrägstrich erwarten), und prozentkodierte Pfade wurden vor der Weiterleitung normalisiert.

[Vollständige Versionshinweise](https://github.com/cloudflare/cloudflared/releases/tag/2026.8.2)

- „Cloudflare-Routen reparieren“ fragt vor der Ausführung nach einer Bestätigung.
- Die Bestätigung von „Öffentliche Hostnamen importieren“ nennt die Änderungen, die es in Cloudflare vornimmt, und das Ergebnis listet die importierten und übersprungenen Hostnamen zeilenweise auf, jede Liste kopierbar.
- „DNS-Zone entfernen“ beginnt ohne ausgewählte Zone.
- Das Feld „Subdomain“ von „Öffentlichen Hostnamen hinzufügen“ erklärt, dass ein vorhandener DNS-Eintrag für den Namen ersetzt wird.`,
    pl_PL: `Zaktualizowano cloudflared do 2026.8.2.

Naprawia dwie regresje w przepisywaniu żądań z wersji 2026.8.0 i 2026.8.1, przed których używaniem ostrzegał projekt źródłowy: końcowe ukośniki były usuwane z żądań przekazywanych do źródeł HTTP (co powodowało pętle przekierowań w aplikacjach wymagających kanonicznych adresów URL z ukośnikiem), a ścieżki zakodowane procentowo były normalizowane przed przekazaniem.

[Pełne informacje o wydaniu](https://github.com/cloudflare/cloudflared/releases/tag/2026.8.2)

- „Napraw trasy Cloudflare” prosi o potwierdzenie przed uruchomieniem.
- Potwierdzenie „Importuj publiczne nazwy hostów” wymienia zmiany, które wprowadza w Cloudflare, a wynik wypisuje zaimportowane i pominięte nazwy hostów, po jednej w wierszu, a każdą listę można skopiować.
- „Usuń strefę DNS” zaczyna bez wybranej strefy.
- Pole „Subdomena” w „Dodaj publiczną nazwę hosta” wyjaśnia, że istniejący rekord DNS dla tej nazwy zostanie zastąpiony.`,
    fr_FR: `cloudflared mis à jour vers 2026.8.2.

Corrige deux régressions de réécriture des requêtes introduites en 2026.8.0 et 2026.8.1, que le projet amont déconseillait d’utiliser : les barres obliques finales étaient supprimées des requêtes transmises aux origines HTTP (provoquant des boucles de redirection dans les applications qui attendent des URL canoniques avec barre finale), et les chemins encodés en pourcentage étaient normalisés avant d’être transmis.

[Notes de version complètes](https://github.com/cloudflare/cloudflared/releases/tag/2026.8.2)

- Réparer les routes Cloudflare demande une confirmation avant de s'exécuter.
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
