// convex/schema.ts
// Declare the types of the data for typechecking, enforced at runtime

import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';


// define schema for projects and tasks

export default defineSchema({
    projects: defineTable({
        name: v.string(), // the project's name
    }),
    tasks: defineTable({
        name: v.string(), // the task's name
        status: v.union(v.literal("Not Started"), v.literal("In-Progress"), v.literal("Complete")),
        projectId: v.id("projects"), // foreign key referencing the projects collection
    }),
});

