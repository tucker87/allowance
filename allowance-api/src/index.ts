

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
}

main();