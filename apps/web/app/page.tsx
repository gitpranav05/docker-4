import { prisma } from "@repo/db/client";
export default async function Home() {
  const users = await prisma.user.findMany(); 
  return (
    <div>
      users:-
{JSON.stringify(users)}
    </div>
  );
}
