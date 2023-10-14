import { z } from 'zod';

export const createdIssueSchema = z.object({
    title: z.string().min(1, "Title is required").max(255),
    description: z.string().min(1, "Description is required").max(6555)
});


export const patchIssueSchema = z.object({
    title: z.string().min(1, "Title is required").max(255).optional(),
    description: z.string().min(1, "Description is required").max(6555).optional()
})