import JsonEditor from "@/components/JSON-Editor";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../DB/db.config";

const DashboardPage = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const loggedInUser = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }
  return (
    <div>
      <div className="my-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your data and share it with others.
        </p>
      </div>
      <JsonEditor />
    </div>
  );
};

export default DashboardPage;
