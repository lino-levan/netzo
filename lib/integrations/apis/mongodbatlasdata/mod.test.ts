import { assertEquals, assertExists } from "../../../deps/std/assert/mod.ts";
import { mongodbatlasdata } from "./mod.ts";

Deno.test("[apis] mongodbatlasdata", async (t) => {
  const api = mongodbatlasdata({
    apiKey: Deno.env.get("MONGODBATLASDATA_API_KEY")!,
    dataApiAppId: Deno.env.get("MONGODBATLASDATA_DATA_API_APP_ID")!,
  });

  await t.step("find documents", async () => {
    const result = await api.action.find.post({
      dataSource: "mongodb-atlas",
      database: "DATABASE_NAME",
      collection: "COLLECTION_NAME",
      filter: {
        text: "Test entry",
      },
    });
    assertExists(result.documents);
    assertEquals(Array.isArray(result.documents), true);
  });
});
