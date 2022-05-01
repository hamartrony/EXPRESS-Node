CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "nome" VARCHAR(100) NOT NULL,
  "hashPass" VARCHAR NOT NULL,
  "email" VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);