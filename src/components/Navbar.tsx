import { useState, useEffect } from "react";
import { Search, Bell, Moon } from "lucide-react";

const Navbar: React.FC = () => {
  const [profile, setProfile] = useState<{
    userId: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("userInfo");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);
  console.log("Profile::", profile);
  return (
    <nav className="bg-[var(--main-color)] px-8 py-4 text-[var(--text-color)] shadow-md flex justify-end sticky top-0">
      <div className="flex items-center border border-[#E7E7E7] rounded-full p-2 text-[var(--text-color)] shadow-sm">
        <Search className="text-[var(--text-color)] w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Search Product"
          className="outline-none text-base font-[400] flex-grow bg-transparent"
        />
      </div>
      <div className="flex items-center ml-8 gap-3">
        <div className="bg-[#EDEDED] p-2 rounded-full">
          <Bell className="text-[var(--text-color)] w-6 h-6" />
        </div>
        <div className="bg-[#EDEDED] p-2 rounded-full">
          <Moon className="text-[var(--text-color)] w-6 h-6" />
        </div>
      </div>
      {profile ? (
        <div className="flex items-center gap-4 mx-8">
          <img
            src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-base font-[500] dark:text-white">
            <div>{profile.userId}</div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4 mx-8">
          <img
            src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
            alt="default profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-base font-[500] dark:text-white">
            <div>Guest</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
