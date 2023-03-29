/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.12.0.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as actions_openai from "../actions/openai";
import type * as crons from "../crons";
import type * as game from "../game";
import type * as lib_randomSlug from "../lib/randomSlug";
import type * as lib_withSession from "../lib/withSession";
import type * as lib_withUser from "../lib/withUser";
import type * as lib_withZod from "../lib/withZod";
import type * as lib_zodUtils from "../lib/zodUtils";
import type * as presence from "../presence";
import type * as publicGame from "../publicGame";
import type * as round from "../round";
import type * as shared from "../shared";
import type * as submissions from "../submissions";
import type * as users from "../users";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  "actions/openai": typeof actions_openai;
  crons: typeof crons;
  game: typeof game;
  "lib/randomSlug": typeof lib_randomSlug;
  "lib/withSession": typeof lib_withSession;
  "lib/withUser": typeof lib_withUser;
  "lib/withZod": typeof lib_withZod;
  "lib/zodUtils": typeof lib_zodUtils;
  presence: typeof presence;
  publicGame: typeof publicGame;
  round: typeof round;
  shared: typeof shared;
  submissions: typeof submissions;
  users: typeof users;
}>;
