import { useParams } from "react-router-dom";
import Card from "./card";
import Product_array from "./ProjectData.jsx";
import ProjectCard from "./ProjectCard.jsx";


console.log(Product_array);



export default function Products() {
const params = useParams()
console.log('Params: ',params);

console.log(params.project);



return params.project === 'project' ? (<div>
        <div className="px-44">
                    <p className="mt-24 text-4xl">⚡</p>
                    <p className=" font-bold text-gray-700 text-4xl">What I've been working on</p>
                  </div>
      <div className=" py-10 grid grid-cols-1  gap-10 ">
        {Product_array.map(({ tittle, description, techStack, image }) => {
          return (
            <ProjectCard
              key={tittle}
              tittle={tittle}
              description={description}
              image={image}
              techStack={techStack}
            />
          );
        })}
      </div> 
   
   
   
   
   
   </div>) 


// OR----------
:  
// OR----------



        (<div><div className="px-44">
                    <p className=" font-bold text-gray-600 text-xl">What I've been working on</p>
                  </div>
      <div className="grid grid-cols-1  gap-10 ">
        {Product_array.map(({ tittle, description, techStack, image }) => {
          return (
            <Card
              key={tittle}
              tittle={tittle}
              description={description}
              image={image}
              techStack={techStack}
            />
          );
        })}
      </div>
    </div>)

  
}
