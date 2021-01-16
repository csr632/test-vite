## vite monorepo starter

This is a demo monorepo project for [vite](https://github.com/vitejs/vite).
This project demonstrate how to develop libraries **in monorepo** using vite as your local develop envirenment.

This is a valilla setup to show how to make vite wrok with monorepo. It Use full power of Typescript!

For a more smooth workflow for bigger project. Checkout [this demo project](https://github.com/csr632/test-vite/tree/lib-monorepo), which use [vite-plugin-react-pages](https://github.com/vitejs/vite-plugin-react-pages) to:

- Put demos close to their related components source code.
- Use filesystem-based routing, so that you don't need to warry about routing setup of the demos.

# How to use

`yarn` (require yarn 1.x)

`cd packages/demos`

`yarn dev` You can play with demos of your packages in local develop envirenment.

Edit `packages/button/src/index.tsx` or other souce files, the demos will inflect your change instantly.
Edit `packages/button/demos/demo1.tsx` or other demo files, the demos will inflect your change instantly.

---

Checkout [vite-plugin-react-pages](https://github.com/vitejs/vite-plugin-react-pages) for more info.
