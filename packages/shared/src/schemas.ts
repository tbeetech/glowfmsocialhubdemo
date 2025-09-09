import { z } from "zod";

export const LinkIdentitySchema = z.object({
  platform: z.enum(["instagram", "tiktok", "youtube", "facebook", "x"]),
  handle: z.string().min(1).max(64)
});

export const PrefsSchema = z.object({
  platformPrefs: z.array(z.enum(["instagram","tiktok","youtube","facebook","x"])).min(1)
});

export const ReactionSchema = z.object({
  contentId: z.string().min(1),
  type: z.enum(["heart","fire","laugh"])
});

export const PollVoteSchema = z.object({
  optionId: z.string().min(1)
});

export const CreateDeeplinkSchema = z.object({
  targetUrl: z.string().url(),
  utm: z.object({
    source: z.string().optional(),
    medium: z.string().optional(),
    campaign: z.string().optional(),
    content: z.string().optional()
  }).optional()
});

export const TrackEventSchema = z.object({
  event: z.enum(["view","click","watch"]),
  contentId: z.string().min(1),
  meta: z.record(z.any()).optional()
});

export type LinkIdentityBody = z.infer<typeof LinkIdentitySchema>;
export type PrefsBody = z.infer<typeof PrefsSchema>;
export type ReactionBody = z.infer<typeof ReactionSchema>;
export type PollVoteBody = z.infer<typeof PollVoteSchema>;
export type CreateDeeplinkBody = z.infer<typeof CreateDeeplinkSchema>;
export type TrackEventBody = z.infer<typeof TrackEventSchema>;
