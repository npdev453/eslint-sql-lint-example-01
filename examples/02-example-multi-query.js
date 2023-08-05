const sql = require('sql-tag');

const queryMulti = sql`   dRoP TABLE foo; drop TABLE bar;    drop table baz;
    create   table qux (
a bigint NOT null,
b int not NULL NOT NULL DEFAULT 0,
c float (8) NOT NULL,
d float (10) not NULL,
e character varying(256) NOT NULL default '',
f character varying(128) NOT NULL DEFAULT ''
);
`; 
