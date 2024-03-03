import { useRef, useState } from "react";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFetch } from "../hooks/useFetch";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function Create() {
  const [value, setValue] = useState("");
  const title: any = useRef();
  const image: any = useRef();
  const postedAt: any = useRef();
  const { setIsPending, error, addNewPost } = useFetch(
    "http://localhost:3000/news",
    "POST"
  );
  const navigate = useNavigate();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      title.current.value.trim().length > 1 &&
      image.current.value.trim().length > 1 &&
      postedAt.current.value.trim().length > 1 &&
      value.trim().length > 1
    ) {
      setIsPending(true);
      const d = {
        id: uuidv4(),
        title: title.current.value,
        image: image.current.value,
        postedAt: postedAt.current.value,
        body: value,
      };
      addNewPost(d);
      setTimeout(() => {
        navigate("/");
      }, 2000);
      toast.success("Malumotlar kiritildi :)");
    } else {
      toast.error("Iltimos barcha inputlarni to'ldiring!");
      toast.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[10px]">
      <h2 className="text-[30px] font-bold text-[#141829]">Create News :)</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] gap-[20px]"
      >
        <label className="input input-bordered flex items-center gap-2">
          Title:
          <input
            ref={title}
            type="text"
            className="grow"
            placeholder="Title writing..."
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Img Url:
          <input
            ref={image}
            type="text"
            className="grow"
            placeholder="img url writing..."
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Posted Time:
          <input
            ref={postedAt}
            type="text"
            className="grow"
            placeholder="Posted time writing..."
          />
        </label>

        <ReactQuill
          modules={module}
          theme="snow"
          value={value}
          onChange={setValue}
        />
        <button className="btn btn-outline btn-neutral text-[25px]">
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
