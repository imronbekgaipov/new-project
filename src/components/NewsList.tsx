import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function NewsList() {
  const { data } = useFetch("http://localhost:3000/news");

  return (
    <div>
      <ul className="flex flex-col gap-[20px]">
        {data &&
          data.map((d: any) => {
            return (
              <li key={d.id}>
                <div className="card lg:card-side bg-base-100  shadow-2xl ">
                  <figure>
                    <img
                      className="w-[1000px] h-[400px]"
                      src={d.image}
                      alt={d.title}
                    />
                  </figure>
                  <div className="card-body flex flex-col justify-between">
                    <h2 className="card-title">{d.title}</h2>
                    <div className="card-actions justify-end">
                      <Link
                        to={`/news/${d.id}`}
                        className="btn btn-outline btn-neutral"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default NewsList;
