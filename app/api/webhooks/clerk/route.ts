import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser, updateUser, deleteUser } from "@/lib/actions/user.actions";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Missing WEBHOOK_SECRET environment variable");
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const body = await req.text();
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Clerk webhook verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, username, image_url } = evt.data;

    const user = await createUser({
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username ?? email_addresses[0].email_address.split("@")[0],
      profilePic: image_url,
    });

    return Response.json({ message: "User created", user });
  }

  if (eventType === "user.updated") {
    const { id, username, image_url } = evt.data;

    const user = await updateUser(id, {
      username: username ?? "",
      profilePic: image_url,
    });

    return Response.json({ message: "User updated", user });
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;
    if (id) await deleteUser(id);
    return Response.json({ message: "User deleted" });
  }

  return new Response("", { status: 200 });
}
