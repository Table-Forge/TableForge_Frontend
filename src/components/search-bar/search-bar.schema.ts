import { z } from "zod";

const searchSchema = z.object({
  search: z.string().optional(),
  location: z.string().optional(),
  level: z.enum(["easy", "medium", "hard"]).optional(),
  playerQty: z.number().min(1).optional(),
});

type ISearchSchema = z.infer<typeof searchSchema>;

export { searchSchema };

export type { ISearchSchema };
