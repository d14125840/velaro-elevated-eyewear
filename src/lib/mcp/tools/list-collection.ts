import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const collection = [
  {
    id: "velaro-noir",
    name: "VELARO Noir",
    description: "Signature matte-black polarized frame with titanium hinges.",
    price_eur: 289,
    material: "Acetate + Titanium",
  },
  {
    id: "velaro-titan",
    name: "VELARO Titan",
    description: "Ultra-light brushed titanium aviator with polarized bronze lenses.",
    price_eur: 349,
    material: "Titanium",
  },
  {
    id: "velaro-gold",
    name: "VELARO Gold Edition",
    description: "Limited-run 18k gold-plated frame, hand-finished in Italy.",
    price_eur: 549,
    material: "18k Gold-plated Steel",
  },
];

export default defineTool({
  name: "list_collection",
  title: "List VELARO collection",
  description: "Return the current VELARO luxury eyewear collection with prices and materials.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(collection, null, 2) }],
    structuredContent: { items: collection },
  }),
});
