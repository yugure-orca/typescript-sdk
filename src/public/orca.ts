import { Connection } from "@solana/web3.js";
import { OrcaImpl } from "../model/orca/orca-impl";
import { Orca } from "./types";

/**
 * Retrieve an instance of the Orca SDK
 * @param connection Solana connection class
 * @returns An instance of Orca SDK
 */
export function getOrca(connection: Connection): Orca {
  return new OrcaImpl(connection);
}
