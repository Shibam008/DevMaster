import { useNewsContext } from "../context/newsContext";

const Navbar = () => {
  const { setCategory } = useNewsContext();

  let timer = null;

  const handleSearch = (e) => {
    const search = e.target.value;
    if (!search) return;

    clearTimeout(timer);

    timer = setTimeout(() => {
      setCategory(search)
    }, 1000);
    
  };

  return (
    <div className="flex justify-center bg-gray-800 sticky top-0 z-999">
      <div className="$$navbar flex h-15 items-center bg-gray-800 w-[80%]">
        <div className="flex-1">
          <a className="$$btn $$btn-ghost text-xl">SS News</a>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            // value={category}
            onChange={handleSearch}
            className="$$input $$input-bordered w-24 md:w-auto outline-none ring-1 ring-gray-950 px-2 py-0.5 rounded-md"
          />
          <div className="$$dropdown $$dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="$$btn $$btn-ghost $$btn-circle $$avatar"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
