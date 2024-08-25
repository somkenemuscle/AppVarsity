'use server';

import Navbar from "@/components/shared/Navbar";
import InteractCard from "@/components/shared/InteractCard";
import { getAllInteractions } from "@/lib/actions/interaction.actions";
import CreateInteractionForm from "@/components/shared/CreateInteractionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


async function InteractionsPage() {
    const { userId } = auth();
    if (!userId) redirect("/sign-in");

    const interactions = await getAllInteractions();

    return (
        <div>
            <Navbar />

            <div className="mt-32">
                <CreateInteractionForm
                    action="Add"
                    userId={userId}
                />
            </div>

            {interactions.length > 0 ? (
                interactions.map((interact: InteractionMapParams) => (
                    <InteractCard
                        key={interact._id}
                        id={interact._id}
                        username={interact.author.username}
                        interaction={interact.interaction}
                        profilePic={interact.author.profilePic}
                        clerkId={interact.author.clerkId}
                    />
                ))
            ) : (
                <h1 className="mt-36">No interactions available</h1>
            )}
        </div>
    );
}

export default InteractionsPage;
