'use server'
import Navbar from "@/components/shared/Navbar";
import { getInteractionById } from "@/lib/actions/interaction.actions"
import InteractCard from "@/components/shared/InteractCard";



async function InteractionsIdPage({ params: { id } }: InteractionsIdPageProps) {

    const interaction = await getInteractionById(id);

    return (
        <div>
            <Navbar />
            {interaction ? (
                <InteractCard
                    id={interaction._id}
                    username={interaction.author.username}
                    interaction={interaction.interaction}
                    profilePic={interaction.author.profilePic}
                    clerkId={interaction.author.clerkId}
                />
            ) : (
                <h1 className="mt-36 text-center">No interactions for {id} was found</h1>
            )}

            <h1>all responses</h1>
        </div>
    )
}

export default InteractionsIdPage