all: lint fmt_check

lint:
	deno lint --ignore=".aleph,dist"
fmt_check:
	deno fmt --check --ignore=".aleph,dist"
fmt:
	deno fmt --ignore=".aleph,dist"
