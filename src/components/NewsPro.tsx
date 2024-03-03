import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
function NewsPro() {
  const { id } = useParams();
  const [data, setData]: any = useState();

  useEffect(() => {
    const getData = (url: string) => {
      fetch(url)
        .then((doc) => doc.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    };
    getData("http://localhost:3000/news/" + id);
  }, [id]);
  return (
    data && (
      <div className="flex flex-col gap-[30px]">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <figure>
              <img
                className="w-[500px] h-full object-cover  rounded-md"
                src={data.image}
                alt="Album"
              />
            </figure>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title opacity-50 underline">{data.postedAt}</h2>
            <h2 className="card-title mb-[30px] text-[30px]">{data.title}</h2>
            <div className="flex flex-col items-center">{parse(data.body)}</div>
            <div className="card-actions justify-end">
              <Link to="/" className="btn btn-outline btn-neutral">
                Bask
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default NewsPro;
