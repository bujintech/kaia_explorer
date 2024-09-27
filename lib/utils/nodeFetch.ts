export const BASE_NODE_RPC =
  process.env.BASE_NODE_RPC ||
  "https://rpc.ankr.com/klaytn/452fcd62a28e28193d74a5dbe1ba1d001f63962461ec355117b539c1158222db";

export interface ResponseData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result?: any;
  error?: {
    code: number;
    message: string;
  };
}

export const _fetch = async (
  url: Parameters<typeof fetch>[0],
  parmas: Parameters<typeof fetch>[1]
): Promise<ResponseData> => {
  try {
    const response = await fetch(url, parmas);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data: ResponseData = await response.json();
    console.log("request result ----", data);
    return data;
  } catch (error) {
    console.log("request error ----", error);
    return {
      error: {
        code: -1,
        message: "Network response was not ok ",
      },
    };
  }
};
