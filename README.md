# Next.js 13 Extension Snippets

This is a collection of useful code snippets to speed up development in `Next.js 13` (`app`) directory.

## Usage

Tab trigger snippets are available for the following languages: `TypeScript React`, `Javascript React`.

## Features

| Command                                                | Description                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| [`prc`](#page-component)                               | Create a new page component.                                       |
| [`lmrc`](#layout-root-and-metadata-component)          | Create a new layout root component with metadata.                  |
| [`lrc`](#layout-root-component)                        | Create a new layout root component.                                |
| [`crc`](#client-component)                             | Create a new client component.                                     |
| [`mr`](#metadata)                                      | Create a new metadata.                                             |
| [`gmrf`](#generatemetadata)                            | Create a new generateMetaData for SEO.                             |
| [`gsp`](#generatestaticparams-for-dynamic-page-static) | Create a new generateStaticParams function for dynamic page static |
| [`rag`](#route-handler-api-get)                        | Create a function Route Handler API GET.                           |
| [`ragd`](#route-handler-api-get-with-dynamic)          | Create a function Route Handler API GET with Dynamic.              |
| [`rags`](#route-handler-api-get-and-search)            | Create a function Route Handler API GET and Search.                |
| [`rags`](#route-handler-api-post)                      | Create a function Route Handler API POST.                          |
| [`rap`](#route-handler-api-post)                       | Create a function Route Handler API POST.                          |
| [`rau`](#route-handler-api-update)                     | Create a function Route Handler API UPDATE.                        |
| [`rad`](#route-handler-api-delete)                     | Create a function Route Handler API DELETE.                        |
| [`load`](#loading)                                     | Create a Loading component                                         |
| [`err`](#error)                                        | Create a Error component with error handling and recovery          |

## Full Snippets

### Page Component

Prefix: `prc`

```tsx
export default function {Name}Page() {
  return (
    <div>
      <h1>Hello Page ${Name}</h1>
    </div>
  );
}

```

### Layout Component

Prefix: `lrc`

```tsx

export default function ${Root Name}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout ${Name}</h1>
    </div>
  );
}


```

### Client Component

Prefix: `crc`

```tsx

'use client';

interface ${Name}Props {
  ${propName}: ${string};
}
export default function ${Name}({}:${Name}Props) {
  return (
    <div>
      <h1>Hello Root and MetaData ${Name}</h1>
    </div>
  );
}


```

### Layout and Metadata Component

Prefix: `lmrc`

```tsx
export const metadata = {
  title: '${Title}',
  description: '${Description}',
};
export default function ${Root Name}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root and MetaData ${Name}</h1>
    </div>
  );
}


```

### Metadata

Prefix: `mr`

```tsx
export const metadata = {
  title: "${Title}",
  description: "${Description}",
};
```

### generateMetaData

Prefix: `gmrf`

```tsx

import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { ${slug} };
}): Promise<Metadata> {
  const product = await ${getData}(${slug});
  return { title: product.title };
}


```

### generateStaticParams for Dynamic Page Static

Prefix: `gsp`

```tsx
export async function generateStaticParams() {
  const posts = await fetch("${fetch url}").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

### Route Handler API GET

Prefix: `rag`

```ts
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request, context: { params: { ${slug}: string } }) {

  const { ${slug} } = context.params;
}

```

### Route Handler API GET with Dynamic

Prefix: `ragd`

```ts

import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request, context: { params: { ${slug}: string } }) {

  const { ${slug} } = context.params;
}

```

### Route Handler API GET and Search

Prefix: `rags`

```ts
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const url = new URL(req.url).searchParams;
  const id = Number(url.get("id"));
  // Example: http://localhost:3000/api/posts?id=1
}
```

### Route Handler API POST

Prefix: `rap`

```ts
import { NextResponse, NextRequest } from "next/server";
export async function POST(request: Request) {
  // this request body is a JSON object
  const { title } = await req.json();
  return new NextResponse.json({ title }, { status: 201 });
}
```

### Route Handler API UPDATE

Prefix: `rau`

```ts
import { NextResponse, NextRequest } from "next/server";
export async function PUT(request: Request) {
  // this request body is a JSON object
  const { title } = await req.json();
  return new NextResponse.json({ title }, { status: 201 });
}
```

### Route Handler API DELETE

Prefix: `rad`

```ts
import { NextResponse, NextRequest } from "next/server";
export async function DELETE(request: Request) {
  // your function here
}
```

### Loading

Prefix: `load`

```tsx
export default function Loading() {
  return <div>Loading...</div>;
}
```

### Error

Prefix: `err`

```tsx
"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
```

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Contributing

Contributions are welcome! If you have a useful code snippet that you'd like to share, simply open a pull request and we'll review it as soon as possible.

**Enjoy!**
