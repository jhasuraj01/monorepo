pnpm i \
&& pnpm update \
&& pnpm update:packages \
&& pnpm clear:all \
&& pnpm i \
&& pnpm build \
&& pnpm format \
&& pnpm lint \
&& pnpm build \
&& pnpm typecheck:src \
&& pnpm typecheck:test \
&& pnpm test \
&& pnpm lint:check \
&& pnpm format:check \
&& echo "Success"