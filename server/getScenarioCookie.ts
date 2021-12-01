import { Request } from 'express';
import { z } from 'zod';

const ScenarioConfig = z.object({
  path: z.string(),
  status: z.number(),
  body: z.any(),
});

type Scenario = z.infer<typeof ScenarioConfig>;

/**
 * send a cookie with the name SCENARIO, and a value that is valid JSON in the format of `ScenarioConfig`
 * `path` is used check against the request, e.g for an api call to `/api/foo/bar/baz` you could use any string
 * contained in that path, `/api`, `foo` `f` `/api/foo/bar/baz` would all work
 */
export default function getScenarioCookie(req: Request): null | Scenario {
  const [, scenarioJson] = req.headers.cookie
    ?.split(';')
    .map((s) => s.trim())
    .find((c) => c.startsWith('SCENARIO'))
    ?.split('=') ?? [null, null];

  if (!scenarioJson) return null;

  try {
    return ScenarioConfig.parse(JSON.parse(scenarioJson));
  } catch (e: any) {
    throw new Error(`unable to parse SCENARIO cookie with error: ${e.message}`);
  }
}
