import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { eq } from 'drizzle-orm';
import { usersTable } from './db';

const db = drizzle(process.env.DB_FILE_NAME!);

async function main() {
    const user: typeof usersTable.$inferInsert = {
        name: 'Jason',
        email: 'jtgeek@example.com',
    };

    await db.insert(usersTable).values(user);
    console.log('New user created!')

    const users = await db.select().from(usersTable);
    console.log('Getting all users from the database: ', users)
    /*
    const users: {
      id: number;
      name: string;
      age: number;
      email: string;
    }[]
    */

    await db
        .update(usersTable)
        .set({
            name: 'Tucker',
        })
        .where(eq(usersTable.email, user.email));
    console.log('User info updated!')

    await db.delete(usersTable).where(eq(usersTable.email, user.email));
    const users2 = await db.select().from(usersTable);
    console.log(users2);
    console.log('User deleted!')

    //Real setup starts here
    await db.insert(usersTable).values(user);

    const user3: typeof usersTable.$inferInsert = {
        name: 'Amanda',
        email: 'valiantrye@gmail.com',
    };

    await db.insert(usersTable).values(user3);

    console.log('Seeded!')
}

main();