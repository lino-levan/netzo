import { defineRoute } from "$fresh/src/server/mod.ts";
import { AuthForm } from "./components/AuthForm.tsx";
import type { NetzoState } from "../../config/mod.ts";

export default defineRoute<NetzoState>((_req, ctx) => {
  const {
    // title = "Sign In",
    // description,
    // color = "primary",
    backgroundColor = "hsl(var(--muted))",
    // logo,
    caption,
  } = ctx.state.portal;

  return (
    <main
      className={`h-[100dvh] w-[100dvw] flex flex-col bg-[${backgroundColor}]`}
    >
      <section className="grid flex-1 p-4 place-items-center">
        <div className="grid gap-6 w-full xs:w-[350px] max-w-[350px]">
          <AuthForm {...ctx.state.portal} />

          {caption && (
            <p
              className="px-8 text-sm text-center text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: caption }}
            />
          )}
        </div>
      </section>

      <footer className="flex items-center justify-center p-4">
        <a href="https://netzo.io/" target="_blank">
          <img
            src="https://netzo.io/logos/built-with-netzo-light.svg"
            alt="Built with Netzo"
            class="h-[36px]"
          />
        </a>
      </footer>
    </main>
  );
});