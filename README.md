## Rick & Morty API Integration Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technologies Used
- Next.js: The project utilizes Next.js for server-side rendering and routing.
- TypeScript: TypeScript is used for type-checking and enhanced development experience.
- tailwindcss: The project leverages tailwindcss for styling.
- daisyui as a tailwind plugin

Documentation
- The project includes detailed documentation in the README.md file available in the GitHub repository. This documentation covers the following aspects:
- Rationale Behind Technologies: The documentation explains why Next.js, TypeScript, and tailwindcss were chosen for the project, highlighting their suitability for showcasing both frontend and backend skills.
- Design Considerations: It outlines the design considerations taken into account while integrating the Rick & Morty API, including data fetching strategies and component architecture.
- Implementation Details: The README.md provides insights into the implementation details, such as how data is fetched from the API, how components are structured, and any customizations made to enhance user experience.
- I used local storage for storing the notes about the user as it's a simple approach to persist data since it doesn't expire when the session ends

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
