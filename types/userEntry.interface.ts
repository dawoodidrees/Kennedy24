export interface UserEntry {
  tokenId: number;
  entry: number[];
  staked: boolean;
  touched: boolean;
  automated: boolean;
  automationDays: number;
}

export interface CreateEntryDTO {
  tokenIds: number[];
  entries: string[];
  automationDays: number[];
  totalAutomationDays: number;
}
