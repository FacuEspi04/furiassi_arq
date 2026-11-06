import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

/** Sale del modo edición y vuelve a la home publicada. */
export async function GET() {
  (await draftMode()).disable();
  redirect("/");
}
