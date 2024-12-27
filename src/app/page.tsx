import Image from "next/image";
 

 export default function Home() {
  return   <div className="absolute -z-10 inset-0">
    
       Home Page
      <div>
       <Image src='/home.jpg' alt="Home" fill   style={{objectFit:'cover'}} />
       </div> 
       
       </div>
   
}
