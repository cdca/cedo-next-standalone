# Links

This repo is live on: [https://next-standalone-demo.cedo.dev/](https://next-standalone-demo.cedo.dev/) (Hosted on a VM with a reverse proxy. Created basic example for adding users.)  
This repo is part of: [https://www.cedo.dev/blog/deploy-next-standalone-with-postgres-prisma-and-docker](https://www.cedo.dev/blog/deploy-next-standalone-with-postgres-prisma-and-docker)

## Build steps

First, you have to build the Next image

```docker
docker compose build
```

After that, run the containers

```docker
docker compose up
```

## More info

If you want to run this from the VM, you have to setup network between the Next and database container.  
Also, this setup is working with dynamic rendering because database is not up when you are building the Next image, so you can't have static pages.

## Questions

If you have any questions you can write them in the comment section under the post.
