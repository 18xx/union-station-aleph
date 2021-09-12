all: lint fmt_check

lint:
	deno lint --ignore=".aleph,.vercel,dist"
fmt_check:
	deno fmt --check --ignore=".aleph,.vercel,dist"
fmt:
	deno fmt --ignore=".aleph,.vercel,dist"
