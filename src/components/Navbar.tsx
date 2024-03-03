import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="max-container py-[10px]">
      <div className="flex flex-row justify-between items-center">
        <Link className="text-[30px] text-[#FEF6FB]" to="/">
          News
        </Link>
        <nav>
          <ul className="flex flex-row items-center gap-[20px]">
            <li className="text-[#FEF6FB] border rounded-[8px] border-[#E7E7DE] py-[5px] px-[8px] hover:bg-[#E7E7DE] hover:text-[#141829]  cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#FEF6FB] border rounded-[8px] border-[#E7E7DE] py-[5px] px-[8px] hover:bg-[#E7E7DE] hover:text-[#141829]  cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="text-[#FEF6FB] border rounded-[8px] border-[#E7E7DE] py-[5px] px-[8px] hover:bg-[#E7E7DE] hover:text-[#141829]  cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-[#FEF6FB] border rounded-[8px] border-[#E7E7DE] py-[5px] px-[8px] hover:bg-[#E7E7DE] hover:text-[#141829]  cursor-pointer">
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
