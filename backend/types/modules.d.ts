import { PoolConnection } from "mysql2";
/**
 * Modules declaration file.
 *
 * Declare types for javascript modules without types.
 */
// For Example:
// declare module "a-module-without-types";

declare module "xpresser/types/http" {
  interface Http {
    db(): PoolConnection;
  }
}
