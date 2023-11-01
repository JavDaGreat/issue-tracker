"use client";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { log } from "console";
import Link from "next/link";
import { useEffect, useState } from "react";
type FetchedData = {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export default function page() {
  const [allIssue, setAllIssue] = useState<FetchedData[]>([]);

  useEffect(() => {
    const getIssues = async () => {
      const resp = await fetch("/api/issues");
      const data = await resp.json();
      return data;
    };

    const fetchData = async () => {
      const data = await getIssues();
      setAllIssue(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="h-full w-screen flex flex-col ">
      <Button className="m-2 p-3 h-18 w-32">
        <Link href="/issues/new">New Issue +</Link>
      </Button>
      <div className="p-3 flex gap-4 flex-wrap ">
        {allIssue.map((issue) => {
          return (
            <div
              key={issue.id}
              className="max-w-lg  w-80  p-6 bg-white border border-gray-200 rounded-lg shadow   overflow-hidden">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {issue.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                {issue.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3 mb-1 ">
                Edit
              </a>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
