import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { client } from "~/libs/client.server";
import type { Content } from "~/types/content";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader: LoaderFunction = async () => {
  const data = await client.get({ endpoint: "contents" });
  return data;
};

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<Content>();
  const faviconStr = "data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%20%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23" + data.backgroundColor + "%22%2F%3E%3C%2Fsvg%3E";
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href={faviconStr}></link>
        <Meta />
        <Links />
      </head>
      <body style={{ backgroundColor: "#" + data.backgroundColor, color: "#" + data.textColor }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
