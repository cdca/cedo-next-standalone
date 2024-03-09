"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const addUserAction = async (formData: any) => {
  const name = formData.get("name");
  await db.user.create({ data: { name } });
  revalidatePath("/");
};
