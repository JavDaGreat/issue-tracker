import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { createIssueSchema } from "../../validationSchema";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newIssue, { status: 201 });
}

export async function GET() {
  const pris = new PrismaClient();
  const allIssue = await pris.issue.findMany();
  return NextResponse.json(allIssue, { status: 200 });
}
