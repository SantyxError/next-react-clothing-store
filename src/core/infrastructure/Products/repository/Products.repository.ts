const BASE_URL = "https://api.bestbuy.com/v1";

export const fetchFromBestBuy = async (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  const apiKey = process.env.NEXT_PUBLIC_BEST_BUY_API_KEY;

  const queryParams = new URLSearchParams({
    ...params,
    apiKey: apiKey!,
  });

  const response = await fetch(
    `${BASE_URL}/${endpoint}?${queryParams.toString()}`
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
