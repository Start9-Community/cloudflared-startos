import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.10.7:0',
  releaseNotes: {
    en_US:
      'Updated cloudflared to 2026.10.7, fixing HTTP/2 concurrency limits and QUIC metrics, restricting metrics-server debug endpoints, and updating security-sensitive dependencies. Full upstream changes: https://github.com/cloudflare/cloudflared/compare/2026.10.3...2026.10.7',
    es_ES:
      'Actualizado cloudflared a 2026.10.7, con correcciones de los límites de concurrencia HTTP/2 y las métricas QUIC, restricciones de los puntos de depuración del servidor de métricas y actualizaciones de dependencias sensibles para la seguridad. Todos los cambios: https://github.com/cloudflare/cloudflared/compare/2026.10.3...2026.10.7',
    de_DE:
      'cloudflared auf 2026.10.7 aktualisiert: HTTP/2-Parallelitätsgrenzen und QUIC-Metriken korrigiert, Debug-Endpunkte des Metrikservers eingeschränkt und sicherheitsrelevante Abhängigkeiten aktualisiert. Alle Änderungen: https://github.com/cloudflare/cloudflared/compare/2026.10.3...2026.10.7',
    pl_PL:
      'Zaktualizowano cloudflared do 2026.10.7, poprawiając limity współbieżności HTTP/2 i metryki QUIC, ograniczając dostęp do punktów debugowania serwera metryk oraz aktualizując zależności istotne dla bezpieczeństwa. Wszystkie zmiany: https://github.com/cloudflare/cloudflared/compare/2026.10.3...2026.10.7',
    fr_FR:
      'Mise à jour de cloudflared vers 2026.10.7 : correction des limites de concurrence HTTP/2 et des métriques QUIC, restriction des points de débogage du serveur de métriques et mise à jour des dépendances sensibles pour la sécurité. Tous les changements : https://github.com/cloudflare/cloudflared/compare/2026.10.3...2026.10.7',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

export const CLOUDFLARED_VERSION = '2026.10.7'
