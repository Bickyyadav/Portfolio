
import Card from "./card"



export default function Products() {

        const product_array = [
            {
                tittle: "Aceternity",
                description: "A design and development studio that focus on the website.",
                techStack: ["NextJS"," Tailwindcss"],
                image: "image.jpeg"
            },
            {
                tittle: "Algochurn",
                description: "Practive for Technical Interview with hands on coding challanges.",
                techStack: ["NextJS"," Tailwindcss"],
                image: "image.jpeg"
            },
            {
                tittle: "Moonbean",
                description: "Never write from scratch again with Moonbeam, Your first writing tool.",
                techStack: ["NextJS", "Tailwindcss"],
                image: "image.jpeg"
            },
            {
                tittle: "Tailwind Master Kit",
                description: "A beautiful and Comprenshive Tailwind CSS components library for building modern websites and applications.",
                techStack:  ["NextJS"," Tailwindcss"],
                image: "image.jpeg"
            }
        ] 



    return (

        <div>
      <div className="grid grid-cols-1  gap-10 ">
            {product_array.map(({tittle,description,techStack,image}) => {
                return <Card key={tittle} tittle={tittle} description={description} image={image} techStack={techStack} />
            })}

      </div>
            </div>

    )
}