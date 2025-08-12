# Jirakovi TanStack Start

**Moderní webová aplikace na platformě [TanStack Start](https://tanstack.com/start) s pokročilými funkcemi pro správu úkolů, počasí, kalendář a uživatelskou autentizaci.**

---

## 🚀 Technologie

- **TanStack Start** — Rychlý fullstack framework pro moderní webové aplikace
- **TypeScript** — Bezpečné typování napříč celým projektem
- **Drizzle ORM** — Jednoduchý a bezpečný přístup k databázi
- **MariaDB** — Výkonná relační databáze
- **BetterAuth** — Bezpečná autentizace a správa uživatelů
- **WeatherAPI** — Předpověď počasí a aktuální data z externí služby
- **shadcn/ui** — Moderní React komponenty pro elegantní uživatelské rozhraní
- **Další tools** — Rozšířené utility pro produktivitu

---

## 🏗️ Funkce aplikace

- **Login & Registrace** — Bezpečné přihlášení a vytvoření účtu přes BetterAuth
- **Předpověď počasí** — Získávání a zobrazování aktuální předpovědi přes WeatherAPI
- **Kalendář & ToDo List** — Propojený systém pro správu úkolů v kalendáři
- **Moderní UI** — Komponenty shadcn/ui pro rychlý vývoj a profesionální vzhled
- **Správa uživatelů** — Detailní přehled účtů, možnost úprav a bezpečnostní prvky
- **Další nástroje** — Rozšířené funkce pro zvýšení produktivity

---

## 📦 Struktura projektu

```
jirakovi-tanstack-start/
├── src/
│   ├── components/   # UI komponenty (shadcn/ui)
│   ├── data/         # Dodatečná data pro aplikaci
│   ├── db/           # Drizzle ORM schémata a migrace
│   └── routes/       # Jednotlivé routy v aplikaci
├── public/
├── docker-compose.yml
├── drizzle.config.ts
├── package.json
├── README.md
└── ...
```

---

## ⚡ Instalace & spuštění

1. **Naklonujte repozitář:**
   ```bash
   git clone https://github.com/JakubJirak/jirakovi-tanstack-start.git
   cd jirakovi-tanstack-start
   ```

2. **Instalujte závislosti:**
   ```bash
   npm install
   ```

3. **Nastavte proměnné prostředí (.env):**
   - MariaDB connection string
   - WeatherAPI klíč
   - BetterAuth konfigurace

4. **Spusťte migraci databáze:**
   ```bash
   npm run db:migrate
   ```

5. **Spusťte vývojový server:**
   ```bash
   npm run dev
   ```

---

## 🌟 Ukázka funkcí

- **Přihlašovací/Registrační formulář**
- **Dashboard s předpovědí počasí**
- **Kalendář s propojeným seznamem úkolů**
- **Moderní komponenty shadcn/ui**

---

## 🛡️ Bezpečnost & Autentizace

- **BetterAuth** — Ověření uživatelů, správa session, ochrana dat
- **Drizzle ORM** — Bezpečné SQL dotazy a migrace
- **Env proměnné** — Uchovávejte citlivé údaje mimo kód

---

## 📚 Dokumentace

- [TanStack Start](https://tanstack.com/start)
- [Drizzle ORM](https://orm.drizzle.team/)
- [MariaDB](https://mariadb.com/)
- [BetterAuth](https://www.better-auth.com/)
- [WeatherAPI](https://www.weatherapi.com/)
- [shadcn/ui](https://ui.shadcn.com/)
