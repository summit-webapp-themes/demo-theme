import type { RegistryItem } from '../types.js';

export async function fetchComponent(
  registryUrl: string,
  componentName: string,
): Promise<RegistryItem> {
  const url = `${registryUrl}/r/${componentName}.json`;

  let res: Response;
  try {
    res = await fetch(url);
  } catch {
    throw new Error(
      `Could not reach registry at ${registryUrl}.\n` +
        `Check your internet connection or registry URL in summit-ui-lib.config.json`,
    );
  }

  if (res.status === 404) {
    throw new Error(
      `Component "${componentName}" not found in registry.\n` +
        `Run "npx summit-ui-lib list" to see available components.`,
    );
  }

  if (!res.ok) {
    throw new Error(`Registry returned ${res.status} for "${componentName}".`);
  }

  return (await res.json()) as RegistryItem;
}
