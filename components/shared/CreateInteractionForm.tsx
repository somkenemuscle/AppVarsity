"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { defaultValues } from "@/constants/defaultValues"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { createInteraction } from "@/lib/actions/interaction.actions"
import {
    Form,
    FormField
} from "@/components/ui/form"

const formSchema = z.object({
    interaction: z.string().min(1, "Say something")
})


function CreateInteractionForm({ action, userId }: { action: string, userId: string }) {

    const router = useRouter();

    // Set initial form values based on action type and provided data
    const initialValues = action === 'Update' ? {
        interaction: " "     //data?.interaction,
    } : defaultValues

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {

        const interactionData = {
            interaction: values.interaction
        }
        
        if (action === 'Add') {
            try {
                const newInteraction = await createInteraction({
                    interaction: interactionData,
                    userId
                });
                if (newInteraction) {
                    form.reset()
                    router.push(`/interactions/${newInteraction._id}`)
                }

            } catch (error) {
                console.log(error)
            }

        }


    }



    return (
        <div>
            CreateInteractionForm
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="interaction"
                        render={({ field }) => (
                            <Textarea rows={4} {...field} className="max-w-sm px-3 py-2 border rounded-md focus:outline-none" />
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateInteractionForm