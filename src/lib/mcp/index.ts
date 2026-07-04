import { defineMcp } from "@lovable.dev/mcp-js";
import listCollectionTool from "./tools/list-collection";
import getProductTool from "./tools/get-product";

export default defineMcp({
  name: "velaro-mcp",
  title: "VELARO MCP",
  version: "0.1.0",
  instructions:
    "Tools for the VELARO luxury eyewear brand. Use `list_collection` to browse the current collection and `get_product` to look up a single frame by id.",
  tools: [listCollectionTool, getProductTool],
});
