# Microsoft Family Bildschirmzeit-Controller

Eine inoffizielle lokale WebAPI zur Verwaltung und Überwachung der Bildschirmzeit
mehrerer Kinderkonten mit Microsoft Family Safety. Dieses Projekt bietet ein
modernes Dashboard und ermöglicht die Steuerung der Bildschirmzeit direkt vom
lokalen PC.

## Ziele

- Verwaltung von mindestens zwei Kinderkonten
- Anzeige und Änderung der täglichen Bildschirmzeit
- Blockieren und Freigeben einzelner Apps
- Bereitstellung einer einfachen REST-API
- Optionale Weboberfläche für komfortable Steuerung

## Projektstruktur (geplant)

```
microsoft-family-monitor/
├── backend/        # Node.js/Express REST API
├── frontend/       # React Dashboard
├── .env.example    # Beispiel für benötigte Umgebungsvariablen
└── README.md
```

## Voraussetzungen

- Node.js 18+
- Git

## Installation

```bash
git clone https://github.com/<user>/microsoft-family-monitor.git
cd microsoft-family-monitor
```

### Backend einrichten

```bash
cd backend
npm install
cp ../.env.example .env   # Werte eintragen
npm run dev
```

### Frontend einrichten

```bash
cd ../frontend
npm install
npm start
```

Die Weboberfläche ist anschließend unter `http://localhost:3000` erreichbar,
das Backend unter `http://localhost:3001`.

## Umgebungsvariablen

Die Datei `.env` im Backend benötigt folgende Werte:

```
MS_CLIENT_ID=deine-microsoft-client-id
MS_CLIENT_SECRET=dein-microsoft-client-secret
MS_REDIRECT_URI=http://localhost:3001/api/auth/callback
```

## Geplante API-Endpunkte

- `GET /api/accounts` – Liste der registrierten Kinder
- `GET /api/accounts/:childId/usage` – Tagesverbrauch und Limit
- `POST /api/accounts/:childId/setLimit` – Neues Limit setzen
- `POST /api/accounts/:childId/blockApp` – App blockieren
- `POST /api/accounts/:childId/unblockApp` – App freigeben

## Rechtlicher Hinweis

Diese Software verwendet inoffizielle Schnittstellen von Microsoft Family
Safety. Die Nutzung erfolgt auf eigene Verantwortung. Beachte die
Nutzungsbedingungen von Microsoft.

## Lizenz

[MIT](LICENSE)

