// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getBlog?name=how-to-learn-py
import * as fs from "fs"
export default function handler(req, res) {
  
  fs.readdir('DummyBlogs',(err,data)=>{
    if(err){
      res.status(500).json({ error: 'No Such Blogs Found' })
    }
    res.status(200).json(data)
  })
 
}
