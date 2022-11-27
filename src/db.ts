import { Pool } from "pg";

//const connectionString = 'postgres://afnbzzmb:STVCfJC_1uSI2uCmGLeKKGxALizb-5Va@babar.db.elephantsql.com/afnbzzmb';
const connectionString = 'postgresql://postgres:12345678@localhost:5432/dbuser';
const db = new Pool({ connectionString })

export default db;