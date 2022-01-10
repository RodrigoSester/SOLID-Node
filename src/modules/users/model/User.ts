import { v4 as uuidv4 } from "uuid";

class User {
  // eslint-disable-next-line prettier/prettier
  id?: string
  name: string
  admin?: boolean
  email: string
  created_at: Date
  updated_at: Date

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
    if(!this.admin){
      this.admin = false
    }
  }
}

export { User };
