

function Categories() {
  return (
    <div className="flex justify-center mt-10">
      
      {/* Grid Container */}
      <div className="h-[250px] flex gap-9  transition duration-300" >

        {/* Category Box */}
        {[ 
          { img: "/cat1.png", name: "Electronics" },
          { img: "/cat2.png", name: "Fashion" },
          { img: "/cat3.png", name: "Groceries" },
          { img: "/cat4.png", name: "Mobiles" },
          { img: "/cat5.png", name: "music" },
    
          
        ].map((item, index) => (
          
          <div 
            key={index}
            className=" flex flex-col items-center bg-gray-100 shadow-md rounded-xl p-4 w-[190px] h-[190px] hover:scale-105 hover:rounded-full hover:bg-gray-300 transition-all duration-300 "
          >
            <div className=" w-[100px] h-[100px] flex items-center justify-center ">
              <img src={item.img} className="w-full h-full object-contain" />
            </div>
            <p className= " text-black mt-5 font-medium text-sm ">{item.name}</p>
          </div>

        ))}

      </div>
    </div>
  );
}

export default Categories;
