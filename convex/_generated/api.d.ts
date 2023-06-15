/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.17.0-alpha.1.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { ApiFromModules } from "convex/server";
import type * as crons from "../crons";
import type * as game from "../game";
import type * as lib_randomSlug from "../lib/randomSlug";
import type * as lib_relationships from "../lib/relationships";
import type * as lib_rowLevelSecurity from "../lib/rowLevelSecurity";
import type * as lib_withSession from "../lib/withSession";
import type * as lib_withUser from "../lib/withUser";
import type * as openai from "../openai";
import type * as publicGame from "../publicGame";
import type * as rls from "../rls";
import type * as round from "../round";
import type * as shared from "../shared";
import type * as submissions from "../submissions";
import type * as users from "../users";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: ApiFromModules<{
  crons: typeof crons;
  game: typeof game;
  "lib/randomSlug": typeof lib_randomSlug;
  "lib/relationships": typeof lib_relationships;
  "lib/rowLevelSecurity": typeof lib_rowLevelSecurity;
  "lib/withSession": typeof lib_withSession;
  "lib/withUser": typeof lib_withUser;
  openai: typeof openai;
  publicGame: typeof publicGame;
  rls: typeof rls;
  round: typeof round;
  shared: typeof shared;
  submissions: typeof submissions;
  users: typeof users;
}>;
