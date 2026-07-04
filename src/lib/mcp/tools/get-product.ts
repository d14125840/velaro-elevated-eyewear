import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const catalog: Record<string, { name: string; description: string; price_eur: number; material: string }> = {
  "velaro-noir": {
    name: "VELARO Noir",
    description: "Signature matte-black polarized frame with titanium hinges.",
    price_eur: 289,
    material: "Acetate + Titanium",
  },
  "velaro-titan": {
    name: "VELARO Titan",
    description: "Ultra-light brushed titanium aviator with polarized bronze lenses.",
    price_eur: 349,
    material: "Titanium",
  },
  "velaro-gold": {
    name: "VELARO Gold Edition",
    description: "Limited-run 18k gold-plated frame, hand-finished in Italy.",
    price_eur: 549,
    material: "18k Gold-plated Steel",
  },
};

export default defineTool({
  name: "get_product",
  title: "Get VELARO product",
  description: "Fetch detailed information for a single VELARO product by its ID.",
  inputSchema: {
    id: z.string().min(1).describe("Product ID, e.g. 'velaro-noir', 'velaro-titan', 'velaro-gold'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const product = catalog[id];
    if (!product) {
      return {
        content: [{ type: "text", text: `No VELARO product found with id "${id}".` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify({ id, ...product }, null, 2) }],
      structuredContent: { id, ...product },
    };
  },
});
