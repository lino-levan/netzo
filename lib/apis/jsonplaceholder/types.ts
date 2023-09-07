import { z } from "https://deno.land/x/zod@v3.22.2/mod.ts";

export const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
}).deepPartial();

export const dataAddTodoSchema = todoSchema.omit({ id: true });

//types:

export type Todo = z.infer<typeof todoSchema>;
export type DataAddTodo = z.infer<typeof dataAddTodoSchema>;
