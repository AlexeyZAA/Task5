-- SQL Manager Lite for PostgreSQL 5.9.5.52424
-- ---------------------------------------
-- Хост         : 127.0.0.1:7777
-- База данных  : postgres
-- Версия       : PostgreSQL 11.2, compiled by Visual C++ build 1800, 32-bit



SET check_function_bodies = false;
--
-- Structure for table users (OID = 16395) : 
--
SET search_path = public, pg_catalog;
CREATE TABLE public.users (
    user_id integer GENERATED ALWAYS AS IDENTITY NOT NULL,
    user_name char(50)
)
WITH (oids = false);
--
-- Definition for sequence users_user_id_seq (OID = 16416) : 
--
CREATE SEQUENCE public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    MAXVALUE 2147483647
    NO MINVALUE
    CACHE 1;
--
-- Data for table public.users (OID = 16395) (LIMIT 0,3)
--
INSERT INTO users (user_id, user_name)
VALUES (1, 'Иванов Иван Иванович');

INSERT INTO users (user_id, user_name)
VALUES (2, 'Петров Петр Петрович');

INSERT INTO users (user_id, user_name)
VALUES (3, 'Сидоров СИдр Сидорович');

--
-- Definition for index users_pkey (OID = 16418) : 
--
ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey
    PRIMARY KEY (user_id);
--
-- Data for sequence public.users_user_id_seq (OID = 16416)
--
SELECT pg_catalog.setval('users_user_id_seq', 3, true);
--
-- Comments
--
COMMENT ON SCHEMA public IS 'standard public schema';
