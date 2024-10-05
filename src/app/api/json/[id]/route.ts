import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../DB/db.config";

export const GET = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  const { id } = params;

  try {
    const json = await prisma.jsonData.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        content: true,
        createdAt: true,
      },
    });

    return NextResponse.json(json);
  } catch (error) {
    console.error("Error fetching JSON data:", error);

    return NextResponse.json({
      error: "Error fetching JSON data",
      status: 500,
    });
  }
};
