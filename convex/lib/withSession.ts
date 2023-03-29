import { Doc, Id } from "../_generated/dataModel";
import { mutation, MutationCtx, query, QueryCtx } from "../_generated/server";

/**
 * Wrapper for a Convex query or mutation function that provides a session in ctx.
 *
 * Requires the sessionId as the first parameter. This is provided by default by
 * using useSessionQuery or useSessionMutation.
 * Throws an exception if there isn't a valid session.
 * Pass this to `query`, `mutation`, or another wrapper. E.g.:
 * export default mutation(withSession(async ({ db, auth, session }, arg1) => {...}));
 * @param func - Your function that can now take in a `session` in the first param.
 * @returns A function to be passed to `query` or `mutation`.
 */
export function withSession<Ctx extends QueryCtx, Args extends any[], Output>(
  func: (
    ctx: Ctx & { session: Doc<"sessions"> },
    ...args: Args
  ) => Promise<Output>
): (
  ctx: Ctx,
  sessionId: Id<"sessions"> | null,
  ...args: Args
) => Promise<Output>;
/**
 * Wrapper for a Convex query or mutation function that provides a session in ctx.
 *
 * Requires the sessionId as the first parameter. This is provided by default by
 * using useSessionQuery or useSessionMutation.
 * Pass this to `query`, `mutation`, or another wrapper. E.g.:
 * export default mutation(withSession(async ({ db, auth, session }, arg1) => {...}));
 * @param func - Your function that can now take in a `session` in the first param.
 * @returns A function to be passed to `query` or `mutation`.
 */
export function withSession<Ctx extends QueryCtx, Args extends any[], Output>(
  func: (
    ctx: Ctx & { session: Doc<"sessions"> | null },
    ...args: Args
  ) => Promise<Output>,
  options: { optional: true }
): (
  ctx: Ctx,
  sessionId: Id<"sessions"> | null,
  ...args: Args
) => Promise<Output>;
/**
 * Wrapper for a Convex query or mutation function that provides a session in ctx.
 *
 * Requires the sessionId as the first parameter. This is provided by default by
 * using useSessionQuery or useSessionMutation.
 * Throws an exception if there isn't a valid session.
 * Pass this to `query`, `mutation`, or another wrapper. E.g.:
 * export default mutation(withSession(async ({ db, auth, session }, arg1) => {...}));
 * @param func - Your function that can now take in a `session` in the first param.
 * @returns A function to be passed to `query` or `mutation`.
 */
export function withSession<Ctx extends QueryCtx, Args extends any[], Output>(
  func: (
    ctx: Ctx & { session: Doc<"sessions"> | null },
    ...args: Args
  ) => Promise<Output>,
  options?: { optional: true }
): (
  ctx: Ctx,
  sessionId: Id<"sessions"> | null,
  ...args: Args
) => Promise<Output> {
  return async (ctx: Ctx, sessionId: Id<"sessions"> | null, ...args: Args) => {
    if (sessionId && sessionId.tableName !== "sessions")
      throw new Error(
        "Invalid Session ID. Use useSessionMutation or useSessionQuery."
      );
    const session = sessionId ? await ctx.db.get(sessionId) : null;
    if (!options?.optional && !session) {
      throw new Error(
        "Session must be initialized first. " +
          "Are you wrapping your code with <SessionProvider>? " +
          "Are you requiring a session from a query that executes immediately?"
      );
    }
    return func({ ...ctx, session }, ...args);
  };
}

/**
 * Wrapper for a Convex mutation function that provides a session in ctx.
 *
 * Requires the sessionId as the first parameter. This is provided by default by
 * using useSessionMutation.
 * Throws an exception if there isn't a valid session.
 * E.g.:
 * export default mutationWithSession(async ({ db, auth, session }, arg1) => {...}));
 * @param func - Your function that can now take in a `session` in the ctx param.
 * @returns A Convex serverless function.
 */
export const mutationWithSession = <Args extends any[], Output>(
  func: (
    ctx: MutationCtx & { session: Doc<"sessions"> },
    ...args: Args
  ) => Promise<Output>
) => {
  return mutation(withSession(func));
};

/**
 * Wrapper for a Convex query function that provides a session in ctx.
 *
 * Requires the sessionId as the first parameter. This is provided by default by
 * using useSessionQuery.
 * If the session isn't initialized yet, it will pass null.
 * You can't return null, because we use that sentinel value as a sign that
 * the session hasn't been initialized yet.
 * E.g.:
 * export default queryWithSession(async ({ db, auth, session }, arg1) => {...}));
 * @param func - Your function that can now take in a `session` in the ctx param.
 * @returns A Convex serverless function.
 */
export const queryWithSession = <
  Args extends any[],
  Output extends NonNullable<any>
>(
  func: (
    ctx: QueryCtx & { session: Doc<"sessions"> | null },
    ...args: Args
  ) => Promise<Output | null>
) => {
  return query(withSession(func, { optional: true }));
};
