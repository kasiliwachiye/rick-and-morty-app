import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <div className="btn btn-ghost text-xl">
          <Image
            src={"/rick-and-morty-logo.png"}
            width={100}
            height={50}
            alt="rick-and-morty-logo"
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="avatar"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
