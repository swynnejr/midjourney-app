"use client";

import Image from "next/image";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { useQuery } from "react-query";
// https://www.midjourney.com/api/app/recent-jobs/?amount=50&jobType=upscale&orderBy=hot&user_id_ranked_score=null&jobStatus=completed&dedupe=true&refreshApi=0

type Props = {};

function FetcHotImages({}: Props) {
  const url =
    "https://www.midjourney.com/api/app/recent-jobs/?amount=50&jobType=upscale&orderBy=hot&user_id_ranked_score=null&jobStatus=completed&dedupe=true&refreshApi=0";
  const { isLoading, error, data } = useQuery("hotImages", () =>
    fetch(url, {
      method: "GET",
      credentials: "include",
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "X-Auth-Token": process.env.MIDJOURNEY_API_KEY,
      //   "Content-Type": "application/json"
      // }
    }).then((res) => res.json())
  );
  console.log("data", data);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <div>
      <p>Testing</p>
      {data.map(
        (
          hotImage: {
            id: Key | null | undefined;
            event: {
              textprompt:
                | string
                | number
                | boolean
                | ReactElement<
                    any, //www.midjourney.com/api/app/recent-jobs/?amount=50&jobType=upscale&orderBy=hot&user_id_ranked_score=null&jobStatus=completed&dedupe=true&refreshApi=0
                    string | JSXElementConstructor<any>
                  >
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            };
          },
          index: any
        ) => (
          <div key={hotImage.id}>
            <h1>{hotImage.event.textprompt}</h1>
            <Image
              className="mx-auto rounded-full object-cover h-[250px] w-[250px] md:h-[300px] md:w-[325px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]"
              src={data.hotImage.image_paths}
              width={1000}
              height={1000}
              alt="Hot Image"
            />
            {/* // <p>{data.description}</p>
      // <strong>👀 {data.subscribers_count}</strong>{" "}
      // <strong>✨ {data.stargazers_count}</strong>{" "}
      // <strong>🍴 {data.forks_count}</strong> */}
          </div>
        )
      )}
    </div>
  );
}

export default FetcHotImages;
