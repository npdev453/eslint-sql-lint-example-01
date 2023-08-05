const sql = require('sql-tag');

const querySimple = sql`sElEct * FrOm foo LiMiT`; 

const queryWithVars = sql`select * FROM foo where bar = ${'baz'}`; 

const queryComplex = sql`SELECT foo,bar,baz, (SELECT foo,bar,baz from foo WHERE qux = ${'quux'}
   and bar = 'baz' and foo = 'bar' ) as sub_bar FROM foo WHERE bar = ${'baz'}`; 
