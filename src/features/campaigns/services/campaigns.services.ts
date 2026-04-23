import { ICampaign } from "@/src/features/campaigns/schemas/campaign.schema";

import {
  IGetPaginatedParams,
  IPaginatedApiResponse,
} from "@/src/interfaces";
import { api } from "../../api";

const ENDPOINT = "/campaigns";

export const CampaignService = {
  getPaginated: async ({
    page = 1,
    size = 20,
    search,
  }: IGetPaginatedParams = {}): Promise<
    IPaginatedApiResponse<ICampaign>
  > => {
    const { data } = await api.get(ENDPOINT, {
      params: { page, size, search },
    });

    return data;
  },
};
