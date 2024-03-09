import { addUserAction } from "@/actions/add-user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "@/lib/db";

// in this setup, database container is not existing yet so we need to use force-dynamic
// you cant make static pages because you cant query the database
// you can make docker-compose.yaml for the databse before trying to make next image
export const dynamic = "force-dynamic";

export default async function Home() {
  const users = await db.user.findMany({ orderBy: { id: "desc" } });
  return (
    <div className="flex flex-col w-full p-4">
      <p className="w-full text-md text-muted-foreground border p-4 rounded-md">
        This is a simple example of a Next.js app with Prisma and Postgres. The
        app has a form to add a user and a list of users. The form uses a server
        action to add a user to the database and revalidate the page. The list
        of users is fetched from the database.
      </p>
      <div className="flex gap-8 pt-6">
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            User list
          </h1>
          <div className="">
            <ScrollArea className="h-[500px] w-full rounded-md border p-4">
              {users.map((user) => (
                <div key={user.id}>
                  <span>{user.name}</span>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Add user
          </h1>
          <form action={addUserAction} className="flex flex-col gap-4 w-1/2">
            <Input type="text" name="name" placeholder="Name" />
            <Button type="submit">Add user</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
