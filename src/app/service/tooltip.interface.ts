export interface IuserList{
  id: number
  name: string
  username: string
  email: string
  address: IuserAddress
  phone: string
  website: string
  company: IuserCompany
}
interface IuserAddress{
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IuserGeo
}
interface IuserGeo{
  lat: string
  lng: string
}
interface IuserCompany{
  name: string
  catchPhrase: string
  bs: string
}