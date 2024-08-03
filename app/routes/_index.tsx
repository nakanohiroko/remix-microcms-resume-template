import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "~/libs/client.sever";
import { formatDate } from "~/libs/util";
import type { Content } from "~/types/content";

export const meta: MetaFunction = ({data}) => {
  return [
    { title: "職務経歴書" },
    { name: "description", content: data.name + "の職務経歴書です" },
  ];
};

export const loader: LoaderFunction = async () => {
  const data = await client.get({ endpoint: "contents" });
  return data;
};

export default function Index() {
  const data = useLoaderData<Content>();
  return (
    <div className="min-h-screen p-10 font-MPLUS1p pt-16 pb-16">
      <div className="w-full max-w-4xl m-auto">
        <h1 className="text-center text-4xl mb-10 font-bold tracking-[.35em]">職務経歴書</h1>
        <h3 className="text-right mb-10">{formatDate(data.lastUpdate)}</h3>
        <div className="lg:flex mb-10">
          {data.profileImage &&
          <div className="lg:w-1/2 lg:mr-10 lg:mb-0 mb-6">
            <img src={data.profileImage.url} alt="" />
          </div>
          }
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-4xl font-bold mb-4">
              {data.name}
            </h1>
            <h2 className="text-2xl font-medium mb-4">
              {data.occupation}
            </h2>
            <ul className="">
            {data.contacts && data.contacts.map((contact,index) => (
              <li key={index} className="mb-2 text-lg">
                <a href={contact.url} target="_blank" rel="noreferrer">{contact.name}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className="leading-loose mb-14">
          <h3 className="text-2xl font-bold mb-4">職務要約</h3>
          {data.summary}
        </div>
        <div className="leading-loose mb-14">
          <h3 className="text-2xl font-bold mb-4">活かせる経験・知識・技術</h3>
          {data.skills && data.skills.map((skill,index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-medium mb-1">{skill.name}
              {skill.years &&
              <span>（経験年数：{skill.years}年）</span>
              }
              </h4>
              {skill.level}
            </div>
          ))}
        </div>
        <div className="leading-loose mb-20">
          <h3 className="text-2xl font-bold mb-4">職務経歴</h3>
          {data.careers && data.careers.map((career,index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-medium mb-1">{career.company}
              {career.period &&
              <span>（在席期間：{career.period}）</span>
              }
              </h4>
              {career.business &&
              <h5>事業内容：{career.business}</h5>
              }
              <div className="flex mb-5">
                {career.stock &&
                <h5 className="mr-5">資本金：{career.stock}</h5>
                }
                {career.employees &&
                <h5>従業員数：{career.employees}名</h5>
                }
              </div>
              {career.projects && career.projects.map((project,index) => (
                <div key={index} className="mb-12 p-6" style={{ border: "1px solid #" + data.textColor }}>
                  <h4 className="text-xl font-medium mb-1">{project.name}</h4>
                  {project.period &&
                    <h5 className="mb-6">期間：{project.period}</h5>
                  }
                  <div className="project-detail" dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="leading-loose mb-20">
          <h3 className="text-2xl font-bold mb-4">自己PR</h3>
          {data.selfPresentations && data.selfPresentations.map((selfPresentation,index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-medium mb-1">{selfPresentation.headline}</h4>
              {selfPresentation.content}
            </div>
          ))}
        </div>
        <p className="text-right mb-12">以上</p>
      </div>
    </div>
  );
}
