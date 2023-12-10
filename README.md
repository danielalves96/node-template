# NodeJS Template

A modern minimal NodeJS + Express + TypeScript + Prisma template with pre-configured ESLint and Prettier out of the box 📦

## Dependencies

- [bun](https://pnpm.io/pt/)
- [Docker](https://www.docker.com/)
- [docker compose](https://github.com/docker/compose)
- [NodeJs v20.9.0](https://nodejs.org/en)

## Usage

First, make sure you have bun installed in your environment:

```bash
npm install -g bun
```

### Database

For the database, we use a local Postgres database. To run it, execute:

```bash
cd database
```

```bash
docker compose up
```

### Backend

To run the development environment for the first time, execute:

```bash
cd ../server
```

```bash
bun install
```

```bash
cp .env.sample .env
```

```bash
bun prisma migrate dev --name init
```

Then simply run:

```bash
bun dev
```

### Routes Documentation

For API documentation, we have the `/api-docs` route, and for general documentation, we have the `/docs` route.
