# Personal website

This repository contains the code for my personal website, [tibl.dev](https://tibl.dev).

You should not take any inspiration from this code as it is mostly just hacked together to get something up and running as opposed to not having anything up at all 😅

## Development environment

If you decide to play around with it, here is the relevant commands to get you started:

```bash
yarn install
yarn dev
# Yes, that should be it.
```

## Deploying to production

This repository builds Docker images automatically through GitHub Actions. See the [Dockerfile](./Dockerfile) for more details on that. The latest image will automagically be deployed to my private K8s cluster.
