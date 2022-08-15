function Category ({category}) {
    return (
      <div style={{backgroundColor: category.color}} className="rounded-md flex shrink-0 flex-wrap">
        <div className=" w-52 h-52 relative overflow-hidden flex flex-wrap">
            <h3 className="p-4 text-2xl tracking-tighter font-sm text-white font-semibold">
              {category.title}
            </h3>
            <img src={category.bg} alt={category.title} className="absolute w-24 h-24 right-0 bottom-0 translate-x-3 translate-y-3 rotate-[30deg]" />
        </div>
      </div>
    )
  }

export default Category;