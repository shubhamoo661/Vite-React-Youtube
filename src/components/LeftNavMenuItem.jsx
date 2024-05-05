
// Destructuring the props from LeftNav.jsx component.
const LeftNavMenuItem = ({ text, icon, className, action }) => {
  return (
    <>
      <div className={"text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white " + className}
        onClick={action}
      >
        <span className=" text-sm mr-5">{icon}</span>
        {text}
      </div>
    </>
  )
}

export default LeftNavMenuItem