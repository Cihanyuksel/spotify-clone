import categories from "../store/categories";
import Category from './Category'

function SearchPage() {
  return (
    <div className="absolute left-64 top-16 w-[calc(100%-256px)] p-8">
      <h2 className="text-white text-2xl font-bold my-5">Browse All</h2>
      <div className="flex flex-wrap gap-8">
        {categories.map((category, index) => <Category category={category}  key={index}/>)}      
      </div>
    </div>
    
  )
}

export default SearchPage;