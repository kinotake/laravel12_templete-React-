# Repository Guidelines

## Project Structure & Module Organization
Application code lives in `src/app`, following Laravel's domain-driven folders (e.g., `Http/Controllers`, `Models`). Front-end assets sit under `src/resources` with React components in `resources/js` and Blade stubs in `resources/views`. Routes are declared in `src/routes`, while shared configuration stays in `src/config`. Reusable Docker setup resides in `docker/`, and automated tests live in `src/tests` with `Feature/` and `Unit/` suites. Static builds are published through `src/public`.

## Build, Test, and Development Commands
- `composer install && npm install`: Bootstrap PHP and Node dependencies.
- `composer run dev`: Launches PHP artisan server, queue worker, log tailer, and Vite watcher via `concurrently`.
- `npm run dev`: Starts the standalone Vite dev server when you only need the front end.
- `npm run build` / `npm run build:ssr`: Generate production assets (CSR or CSR+SSR).
- `composer run test`: Clears cached config and executes the Pest test suite.

## Coding Style & Naming Conventions
Follow PSR-12 for PHP classes and keep controllers/services aptly named (e.g., `UserInvitationController`). Run `vendor/bin/pint` before committing to auto-format PHP. JavaScript and TypeScript use 2-space indentation with Prettier and ESLint (`npm run format`, `npm run lint`). Tailwind utility groups should leverage `tailwind-merge`; name React components in PascalCase and hooks in camelCase prefixed with `use`.

## Testing Guidelines
Pest is configured in `src/tests/Pest.php`. Create feature tests in `tests/Feature` and unit tests in `tests/Unit`, naming files after the subject (e.g., `UserSignupTest.php`). Run `composer run test` locally and include new tests for bug fixes or features. Aim to cover happy path, validation errors, and authorization branches; flag partial coverage in your PR description when necessary.

## Commit & Pull Request Guidelines
Keep commits scoped and descriptive in the imperative mood, mirroring existing history (e.g., `Add Docker base template`). Reference issue numbers in the first line when available. Pull requests should explain the change, link related tickets, list manual test steps, and attach UI screenshots or terminal output when applicable. Confirm formatting (`npm run format`, `vendor/bin/pint`) and tests are clean before requesting review.

## Environment & Security Tips
Copy `.env.example` to `.env` and update secrets before running migrations. Use the provided Docker compose stack for parity: `docker compose up --build` from the repo root. Never commit `.env`, `storage/` contents, or generated keys; rely on `.env` overrides and secret managers.
