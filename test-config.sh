clear \
&& pnpm i \
&& pnpm clear:all \
&& pnpm i \
&& pnpm build \
&& pnpm lint \
&& pnpm format \
&& pnpm build \
&& pnpm test \
&& pnpm lint:check \
&& pnpm format:check \
&& echo "Success"