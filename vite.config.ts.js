// vite.config.ts
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
var vite_config_default = defineConfig({
  plugins: [solidPlugin()],
  root: "meta-client/",
  build: {
    target: "esnext",
    polyfillDynamicImport: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgc29saWRQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLXNvbGlkXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdHBsdWdpbnM6IFtzb2xpZFBsdWdpbigpXSxcclxuXHRyb290OiBcIm1ldGEtY2xpZW50L1wiLFxyXG5cdGJ1aWxkOiB7XHJcblx0XHQvLyByb2xsdXBPcHRpb25zOiB7XHJcblx0XHQvLyBcdGlucHV0OiB7XHJcblx0XHQvLyBcdFx0bWFpbjogcGF0aC5yZXNvbHZlKFwiRDpcXFxcUHJvZHVjdGl2aXR5IE5WTWVcXFxcX19HaXRcXFxcX1dlYlxcXFx3ZWItdHV0b3JpYWxzLWFuZC1zbmlwcGV0c1wiLCBcIm1ldGEtY2xpZW50L3NyYy9pbmRleC5odG1sXCIpLFxyXG5cdFx0Ly8gXHR9LFxyXG5cdFx0Ly8gfSxcclxuXHRcdHRhcmdldDogXCJlc25leHRcIixcclxuXHRcdHBvbHlmaWxsRHluYW1pY0ltcG9ydDogZmFsc2UsXHJcblx0fSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNBO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUyxDQUFDO0FBQUEsRUFDVixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFNTixRQUFRO0FBQUEsSUFDUix1QkFBdUI7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
