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
    user_name char(50),
    user_pass varchar(100),
    s char(100)
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
-- Data for table public.users (OID = 16395) (LIMIT 0,5)
--
INSERT INTO users (user_id, user_name, user_pass, s)
VALUES (1, 'Иванов Иван Иванович', NULL, NULL);

INSERT INTO users (user_id, user_name, user_pass, s)
VALUES (2, 'Петров Петр Петрович', NULL, NULL);

INSERT INTO users (user_id, user_name, user_pass, s)
VALUES (3, 'Сидоров СИдр Сидорович', NULL, NULL);

INSERT INTO users (user_id, user_name, user_pass, s)
VALUES (29, 'q', 'jjXCzTv2ZBvbDiBQt2kyy7LmA0oN2swdm+qCprpX988=', NULL);

INSERT INTO users (user_id, user_name, user_pass, s)
VALUES (30, 'q1', 'jjXCzTv2ZBvbDiBQt2kyy7LmA0oN2swdm+qCprpX988=', NULL);

--
-- Definition for index users_pkey (OID = 16418) : 
--
ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey
    PRIMARY KEY (user_id);
--
-- Data for sequence public.users_user_id_seq (OID = 16416)
--
SELECT pg_catalog.setval('users_user_id_seq', 30, true);
--
-- Comments
--
COMMENT ON SCHEMA public IS 'standard public schema';
