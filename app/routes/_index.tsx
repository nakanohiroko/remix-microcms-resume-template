import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "~/libs/client.sever";
import type { Content } from "~/types/content";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const data = await client.get({ endpoint: "contents" });
  return data;
};

export default function Index() {
  const data = useLoaderData<Content>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <h1 className="text-3xl font-bold underline">
        {data.name}
      </h1>
    </div>
  );
}
