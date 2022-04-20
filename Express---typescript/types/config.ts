// /src/types/config.ts
export interface ISystemConfig {
  port: number;
}

// /src/config/index.ts
import { ISystemConfig } from "@/types/config";

const systemConfig: ISystemConfig = {
  port: 8000,
};