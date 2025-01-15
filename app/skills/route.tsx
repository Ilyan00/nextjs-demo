"use server";

import { getSkills } from "@/actions/GetSkills";
import { getSession } from "@/utils/sessions";
import { NextResponse } from "next/server";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export async function GET() {
  // Call getSkills function (see below)
  const response = await getSkills();

  return NextResponse.json({ response });
}
