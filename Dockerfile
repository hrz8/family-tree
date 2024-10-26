FROM denoland/deno:alpine-2.0.3

WORKDIR /app

COPY . .

RUN deno cache main.ts

ENTRYPOINT ["deno", "run", "--allow-read", "main.ts"]
