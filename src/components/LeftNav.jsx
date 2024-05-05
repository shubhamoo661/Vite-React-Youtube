import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import LeftNavMenuItem from "./LeftNavMenuItem"
import { categories } from "../utils/Icons";
import { Context } from "../context/contextApi"
import "./CustomeScroll.css"

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context)
  console.log(mobileMenu);
  const navigate = useNavigate()

  const clickHandler = (name, type) => {
    if (type === 'category') {
      // console.log(type,"-->", name);
      return setSelectCategories(name)
    }
    else if (type === 'home') {
      // console.log(type, name);
      return setSelectCategories(name)
    }
    else if (type === "menu") {
      return false
    }
  }

  return (
    <>
      <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all custom-scrollbar ${mobileMenu ? "translate-x-[0px]" : ""}`}>
        <div className="flex px-5 flex-col">
          {categories.map((item) => (
            <div className=" text-white" key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type)
                  navigate("/")
                  console.log(item.name, item.type)
                }}
                className={`${selectCategories === item.name ? "bg-white/[1]" : ""}`}
              />

              {item.divider && (
                <hr className="border-white/[0.2] pt-1"></hr>
              )}
            </div>
          ))}


          <hr className="my-5 border-white/[0.2]" />
          <div className=" text-white/[0.5] font-semibold text-[12px]">
            Clone By : Shubham Sharma
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftNav