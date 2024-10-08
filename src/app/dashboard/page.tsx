import JsonEditor from "@/components/JSON-Editor";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../DB/db.config";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // Explicitly mark this page as dynamic

const DashboardPage = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return redirect("/");
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
  } catch (error) {
    console.error("Error in DashboardPage:", error);
    return (
      <div className="text-red-500">
        An error occurred while loading the dashboard. Please try again later.
      </div>
    );
  }
};

export default DashboardPage;
