import esbuild from "esbuild";

const context = await esbuild.context({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  outfile: "actualplaid",
  legalComments: "none",
  logLevel: "info",
  platform: "node",
});

async function run(args) {
  if (args.includes("--watch")) {
    // Enable watch mode
    await context.watch();
    return;
  }

  await context.rebuild();
}
await run(process.argv.slice(2));
process.exit();
