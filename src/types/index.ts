export interface Product {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  image: string
  category: string
  highlighted?: boolean
}

export interface SEOProps {
  title: string
  description: string
  type?: string
  image?: string
  url?: string
}
